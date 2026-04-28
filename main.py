from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import os
from datetime import datetime
import secrets
import requests
import json

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'enginex-secret-key-2024'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///enginex.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# -------------------------------
# Database Models
# -------------------------------

class Car(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    image_url = db.Column(db.String(500))

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    booking_id = db.Column(db.String(20), unique=True, nullable=False)
    customer_name = db.Column(db.String(100), nullable=False)
    customer_phone = db.Column(db.String(15), nullable=False)
    customer_email = db.Column(db.String(100))
    car_name = db.Column(db.String(100), nullable=False)
    installation_date = db.Column(db.String(20), nullable=False)
    time_slot = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(100), nullable=False)
    special_instructions = db.Column(db.Text)
    total_amount = db.Column(db.Integer, nullable=False)
    services_data = db.Column(db.Text)
    status = db.Column(db.String(20), default='Pending')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# User Model (Authentication)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)  # hashed password
    role = db.Column(db.String(20), default='customer')   # 'customer' or 'shopkeeper'
    phone = db.Column(db.String(15))
    profile_pic = db.Column(db.String(300))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.username}>'

# Feedback Model
class Feedback(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Feedback {self.username} - {self.rating}>'

# OPTIONAL: Shopkeeper shop details (basic structure)
class Shop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    shop_cars = db.Column(db.Text) 
    shop_name = db.Column(db.String(150), nullable=False)
    city = db.Column(db.String(100))
    address = db.Column(db.String(200))
    phone = db.Column(db.String(20))
    description = db.Column(db.Text)
    logo = db.Column(db.String(300))            # Add Logo filename column
    accessories_data = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# car details
class AccessoryMaster(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    car_name = db.Column(db.String(100), nullable=False)  # Scorpio, Creta, Thar
    accessory_name = db.Column(db.String(150), nullable=False)
    min_price = db.Column(db.Integer)
    max_price = db.Column(db.Integer)



# Initialize Database Tables
with app.app_context():
    db.create_all()

# -------------------------------
# Telegram Notification Service
# -------------------------------

def send_telegram_notification(booking_data):
    """
    Sends booking notification message to the registered Telegram bot channel.
    """
    try:
        bot_token = os.environ.get("BOT_TOKEN")
        chat_id = os.environ.get("CHAT_ID")

        if not bot_token or not chat_id:
            print("Telegram credentials missing")
            return False

        message = f"""
🚗 New Booking Received

Booking Details:
📋 Booking ID: {booking_data['booking_id']}
👤 Customer Name: {booking_data['customer_name']}
📞 Phone Number: {booking_data['customer_phone']}
📧 Email: {booking_data['customer_email']}

Vehicle Information:
🚘 Car Model: {booking_data['car_name']}
💰 Total Amount: ₹{booking_data['total_amount']:,}

Installation Schedule:
📅 Date: {booking_data['installation_date']}
⏰ Time Slot: {booking_data['time_slot']}
📍 Location: {booking_data['location']}

Services ({len(booking_data['services'])}):
{chr(10).join([f'• {service["name"]} - ₹{service["price"]:,}' for service in booking_data['services']])}

Special Instructions: {booking_data['special_instructions'] or 'None'}

Created At: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
"""
        
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        payload = {
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'Markdown'
        }
        
        response = requests.post(url, json=payload)
        if response.status_code == 200:
            print("Telegram notification sent successfully.")
            return True
        else:
            print("Failed to send telegram notification:", response.text)
            return False
            
    except Exception as e:
        print("Telegram notification error:", e)
        return False

# -------------------------------
# Route Controllers (Pages)
# -------------------------------

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/car-selection')
def car_selection():
    return render_template('car-selection.html')

@app.route('/modifications')
def modifications():
    return render_template('modifications.html')

@app.route('/login')
def login_page():
    return render_template('auth/login.html')

@app.route('/register')
def register_page():
    return render_template('auth/register.html')

@app.route('/profile')
def profile_page():
    return render_template('auth/profile.html')

@app.route('/feedback')
def feedback_page():
    # This will render a feedback page (you design templates/feedback.html)
    return render_template('feedback.html')

@app.route('/shop/dashboard')
def shop_dashboard():
    # Shopkeeper dashboard (create templates/shop/dashboard.html)
    return render_template('shop/dashboard.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

UPLOAD_FOLDER = "static/uploads/profile"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/api/profile/upload', methods=['POST'])
def upload_profile_pic():
    try:
        user_id = int(request.form.get("user_id"))
        file = request.files.get("profile_pic")

        if not file:
            return jsonify({"success": False, "message": "No image received"})

        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)

        # Update DB
        user = User.query.filter_by(id=user_id).first()
        user.profile_pic = f"/static/uploads/profile/{filename}"
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Profile picture updated!",
            "image_url": f"/static/uploads/profile/{filename}"
        })

    except Exception as e:
        print("PROFILE UPLOAD ERROR:", e)
        return jsonify({"success": False, "message": str(e)})


# -------------------------------
# Auth APIs (Register / Login)
# -------------------------------

@app.route('/api/register', methods=['POST'])
def api_register():
    try:
        data = request.json
        username = data.get('username', '').strip()
        email = data.get('email', '').strip().lower()
        password = data.get('password', '').strip()
        phone = data.get('phone', '').strip()
        role = data.get('role', 'customer').strip()  # 'customer' or 'shopkeeper'

        if not username or not email or not password:
            return jsonify({'success': False, 'message': 'Username, email and password are required.'}), 400

        existing_user = User.query.filter(
            (User.username == username) | (User.email == email)
        ).first()
        if existing_user:
            return jsonify({'success': False, 'message': 'User with this username or email already exists.'}), 409

        hashed_password = generate_password_hash(password)

        user = User(
            username=username,
            email=email,
            password=hashed_password,
            phone=phone,
            role=role if role in ['customer', 'shopkeeper'] else 'customer'
        )
        db.session.add(user)
        db.session.commit()

        return jsonify({
            'success': True,
            'message': 'Registration successful.',
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'role': user.role,
                'phone': user.phone
            }
        }), 201

    except Exception as e:
        print("Error in /api/register:", e)
        return jsonify({'success': False, 'message': 'Server error during registration.'}), 500

@app.route('/api/login', methods=['POST'])
def api_login():
    try:
        data = request.json
        email = data.get('email', '').strip().lower()
        password = data.get('password', '').strip()

        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify({'success': False, 'message': 'Invalid email or password.'}), 401

        return jsonify({
            'success': True,
            'message': 'Login successful.',
            'user': {
                'id': user.id,      
                'username': user.username,
                'email': user.email,
                'role': user.role,
                'phone': user.phone,
                'profile_pic': user.profile_pic
            }
        })
    except Exception as e:
        print("Error in /api/login:", e)
        return jsonify({'success': False, 'message': 'Server error during login.'}), 500


# -------------------------------
# Feedback APIs
# -------------------------------

@app.route('/api/feedback', methods=['POST'])
def add_feedback():
    """
    Add a new feedback entry.
    Expected JSON:
    {
      "username": "Adarsh",
      "rating": 5,
      "message": "Great modification experience!"
    }
    """
    try:
        data = request.json
        username = data.get('username', '').strip() or 'Anonymous'
        rating = int(data.get('rating', 5))
        message = data.get('message', '').strip()

        if not message:
            return jsonify({'success': False, 'message': 'Feedback message is required.'}), 400

        rating = max(1, min(5, rating))  # clamp rating 1–5

        fb = Feedback(username=username, rating=rating, message=message)
        db.session.add(fb)
        db.session.commit()

        return jsonify({'success': True, 'message': 'Feedback submitted successfully.'}), 201
    except Exception as e:
        print("Error in /api/feedback (POST):", e)
        return jsonify({'success': False, 'message': 'Server error while saving feedback.'}), 500

@app.route('/api/feedback', methods=['GET'])
def get_feedback():
    """
    Return latest feedback list for UI display.
    """
    try:
        feedbacks = Feedback.query.order_by(Feedback.created_at.desc()).all()
        data = []
        for fb in feedbacks:
            data.append({
                'username': fb.username,
                'rating': fb.rating,
                'message': fb.message,
                'created_at': fb.created_at.strftime('%Y-%m-%d %H:%M:%S')
            })
        return jsonify({'success': True, 'feedbacks': data})
    except Exception as e:
        print("Error in /api/feedback (GET):", e)
        return jsonify({'success': False, 'message': 'Server error while fetching feedback.'}), 500

# -------------------------------
# Booking API – Create Booking
# -------------------------------

@app.route('/api/bookings', methods=['POST'])
def create_booking():
    try:
        data = request.json
        print("Booking request received.")

        # Generate unique booking ID
        booking_id = f"ENGX{datetime.now().strftime('%Y%m%d')}{secrets.token_hex(3).upper()}"

        # Save booking to database
        booking = Booking(
            booking_id=booking_id,
            customer_name=data['customer']['name'],
            customer_phone=data['customer']['phone'],
            customer_email=data['customer'].get('email', ''),
            car_name=data['booking']['car'],
            installation_date=data['customer']['date'],
            time_slot=data['customer']['timeSlot'],
            location=data['customer']['location'],
            special_instructions=data['customer'].get('instructions', ''),
            total_amount=data['booking']['total'],
            services_data=json.dumps(data['booking']['services'])
        )
        
        db.session.add(booking)
        db.session.commit()

        print(f"Booking stored successfully: {booking_id}")

        # Prepare structured notification object
        notification_data = {
            'booking_id': booking_id,
            'customer_name': data['customer']['name'],
            'customer_phone': data['customer']['phone'],
            'customer_email': data['customer'].get('email', ''),
            'car_name': data['booking']['car'],
            'total_amount': data['booking']['total'],
            'installation_date': data['customer']['date'],
            'time_slot': data['customer']['timeSlot'],
            'location': data['customer']['location'],
            'services': data['booking']['services'],
            'special_instructions': data['customer'].get('instructions', '')
        }

        # Send Telegram alert
        send_telegram_notification(notification_data)

        return jsonify({
            'success': True,
            'booking_id': booking_id,
            'message': 'Booking created successfully.'
        })

    except Exception as e:
        print("Error while processing booking:", str(e))
        return jsonify({'success': False, 'error': str(e)}), 500

# -------------------------------
# Get All Bookings API
# -------------------------------

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    bookings = Booking.query.order_by(Booking.created_at.desc()).all()
    result = []
    
    for booking in bookings:
        result.append({
            'booking_id': booking.booking_id,
            'customer_name': booking.customer_name,
            'car_name': booking.car_name,
            'total_amount': booking.total_amount,
            'status': booking.status,
            'created_at': booking.created_at.strftime('%Y-%m-%d %H:%M:%S')
        })
    
    return jsonify(result)

# -------------------------------
# Shopkeeper - Create Shop API
# -------------------------------

UPLOAD_FOLDER = "static/uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/api/shop/create', methods=['POST'])
def create_or_update_shop():
    try:
        owner_id = int(request.form.get("owner_id"))

        # Check if shop already exists
        shop = Shop.query.filter_by(owner_id=owner_id).first()

        file = request.files.get("logo")
        filename = None

        # If a new logo is uploaded
        if file:
            filename = secure_filename(file.filename)
            file.save(os.path.join(UPLOAD_FOLDER, filename))

        if shop:
            # UPDATE SHOP DETAILS
            shop.shop_name = request.form.get("shop_name")
            shop.address = request.form.get("address")
            shop.city = request.form.get("city")
            shop.phone = request.form.get("phone")
            shop.description = request.form.get("description")

            if filename:
                shop.logo = filename

            db.session.commit()

            return jsonify({"success": True, "message": "Shop updated successfully!", "redirect": "/shop/dashboard"})
        
        else:
            # CREATE NEW SHOP
            new_shop = Shop(
                owner_id=owner_id,
                shop_name=request.form.get("shop_name"),
                address=request.form.get("address"),
                city=request.form.get("city"),
                phone=request.form.get("phone"),
                description=request.form.get("description"),
                logo=filename,
                accessories_data="[]"
            )

            db.session.add(new_shop)
            db.session.commit()

            return jsonify({"success": True, "message": "Shop created successfully!", "redirect": "/shop/dashboard"})

    except Exception as e:
        print("SHOP CREATE/UPDATE ERROR =>", e)
        return jsonify({"success": False, "message": str(e)})
    
@app.route('/api/shop/cars/add', methods=['POST'])
def add_shop_car():
    owner_id = request.form.get("owner_id")
    car_name = request.form.get("car_name")
    car_model = request.form.get("car_model")
    desc = request.form.get("description")

    img = request.files.get("car_image")
    filename = secure_filename(img.filename)
    img.save(os.path.join("static/uploads", filename))

    shop = Shop.query.filter_by(owner_id=owner_id).first()
    cars = json.loads(shop.shop_cars or "[]")

    new_car = {
        "id": len(cars)+1,
        "car_name": car_name,
        "car_model": car_model,
        "car_image": filename,
        "car_desc": desc
    }

    cars.append(new_car)
    shop.shop_cars = json.dumps(cars)
    db.session.commit()

    return jsonify({"success": True, "message": "Car added"})


# -------------------------------
# Get Shop Details by Owner ID
# -------------------------------
@app.route('/api/shop/details/<int:owner_id>', methods=['GET'])
def get_shop_details(owner_id):
    try:
        shop = Shop.query.filter_by(owner_id=owner_id).first()

        if not shop:
            return jsonify({"success": False, "message": "No shop found"}), 404

        return jsonify({
            "success": True,
            "shop": {
                "shop_name": shop.shop_name,
                "address": shop.address,
                "city": shop.city,
                "phone": shop.phone,
                "description": shop.description,
                "logo": shop.logo,
                "accessories_data": shop.accessories_data
            }
        })


    except Exception as e:
        print("DETAILS FETCH ERROR =>", e)
        return jsonify({"success": False, "message": str(e)})

# -------------------------------
# Shopkeeper - ADD SERVICES API
# -------------------------------

@app.route('/api/shop/services/add', methods=['POST'])
def add_service():
    try:
        owner_id = int(request.form.get("owner_id"))
        service_name = request.form.get("service_name")
        price = request.form.get("price")
        description = request.form.get("description")

        # Find shop for this owner
        shop = Shop.query.filter_by(owner_id=owner_id).first()
        if not shop:
            return jsonify({"success": False, "message": "Create shop first!"})

        # Save uploaded images
        images = request.files.getlist("images")
        image_filenames = []

        for img in images:
            filename = secure_filename(img.filename)
            img.save(os.path.join(UPLOAD_FOLDER, filename))
            image_filenames.append(filename)

        # Load existing accessories/services list
        services = json.loads(shop.accessories_data) if shop.accessories_data else []

        # Add new service item
        new_service = {
            "name": service_name,
            "price": price,
            "description": description,
            "images": image_filenames
        }

        services.append(new_service)
        shop.accessories_data = json.dumps(services)

        #  Update global accessory master
        existing = AccessoryMaster.query.filter_by(
            car_name=request.form.get("car_name"),
            accessory_name=service_name
        ).first()

        if not existing:
            master = AccessoryMaster(
                car_name=request.form.get("car_name"),
                accessory_name=service_name,
                min_price=int(price),
                max_price=int(price)
            )
            db.session.add(master)
        else:
            # update price range
            existing.min_price = min(existing.min_price, int(price))
            existing.max_price = max(existing.max_price, int(price))


        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Service added successfully!",
            "redirect": "/shop/services"
        })


    except Exception as e:
        print("SERVICE ADD ERROR:", e)
        return jsonify({"success": False, "message": str(e)})

# -------------------------------
# DELETE SERVICE API
# -------------------------------
@app.route('/api/shop/services/delete/<int:owner_id>/<int:index>', methods=['DELETE'])
def delete_service(owner_id, index):
    try:
        shop = Shop.query.filter_by(owner_id=owner_id).first()
        if not shop:
            return jsonify({"success": False, "message": "Shop not found!"})

        services = json.loads(shop.accessories_data or "[]")

        if index < 0 or index >= len(services):
            return jsonify({"success": False, "message": "Invalid service index!"})

        # Delete service
        removed = services.pop(index)
        shop.accessories_data = json.dumps(services)
        db.session.commit()

        return jsonify({"success": True, "message": "Service deleted successfully!"})

    except Exception as e:
        print("DELETE ERROR:", e)
        return jsonify({"success": False, "message": str(e)})
# -------------------------------
# UPDATE (EDIT) SERVICE API
# -------------------------------
@app.route('/api/shop/services/update/<int:owner_id>/<int:index>', methods=['POST'])
def update_service(owner_id, index):
    try:
        shop = Shop.query.filter_by(owner_id=owner_id).first()
        if not shop:
            return jsonify({"success": False, "message": "Shop not found!"})

        services = json.loads(shop.accessories_data or "[]")

        if index < 0 or index >= len(services):
            return jsonify({"success": False, "message": "Invalid service index!"})

        # OLD service object
        service = services[index]

        # Get fields
        name = request.form.get("service_name")
        price = request.form.get("price")
        description = request.form.get("description")

        # Update text values
        service["name"] = name
        service["price"] = price
        service["description"] = description

        # Handle images if new ones uploaded
        images = request.files.getlist("images")
        if images and images[0].filename != "":
            image_filenames = []
            for img in images:
                filename = secure_filename(img.filename)
                img.save(os.path.join("static/uploads", filename))
                image_filenames.append(filename)

            service["images"] = image_filenames  # Replace old images

        # Save back
        services[index] = service
        shop.accessories_data = json.dumps(services)
        db.session.commit()

        return jsonify({"success": True, "redirect": "/shop/services"})

    except Exception as e:
        print("UPDATE ERROR:", e)
        return jsonify({"success": False, "message": str(e)})
    
@app.route('/api/accessories/<car_name>')
def get_accessories_for_car(car_name):
    items = AccessoryMaster.query.filter_by(car_name=car_name).all()
    result = []

    for a in items:
        result.append({
            "name": a.accessory_name,
            "min_price": a.min_price,
            "max_price": a.max_price
        })

    return jsonify({"success": True, "accessories": result})

@app.route('/api/shops/by-location', methods=['POST'])
def get_shops_for_location():
    data = request.json
    location = data.get("location")
    selected_accessories = data.get("accessories")

    shops = Shop.query.all()
    result = []

    for s in shops:
        services = json.loads(s.accessories_data or "[]")
        service_names = [x["name"].lower() for x in services]

        unavailable = []
        for ac in selected_accessories:
            if ac.lower() not in service_names:
                unavailable.append(ac)

        result.append({
            "shop_name": s.shop_name,
            "city": s.city,
            "phone": s.phone,
            "unavailable": unavailable
        })

    return jsonify({"success": True, "shops": result})



@app.route('/shop/create')
def shop_create():
    return render_template('shop/create.html')

@app.route('/shop/services')
def shop_services():
    return render_template('shop/services.html')

@app.route('/shop/bookings')
def shop_bookings():
    return render_template('shop/bookings.html')




# -------------------------------
# Application Entry Point
# -------------------------------

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
