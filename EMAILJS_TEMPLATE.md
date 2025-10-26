# EmailJS Template Configuration

## Template Subject
```
New Portfolio Contact from {{from_name}}
```

## Template Content (HTML)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Portfolio Contact</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        
        <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            📧 New Portfolio Message
        </h2>
        
        <p style="color: #666; font-size: 16px; margin-bottom: 25px;">
            You have a new message from your portfolio website!
        </p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #333;">
                <strong>Name:</strong> {{from_name}}
            </p>
            <p style="margin: 0 0 10px 0; color: #333;">
                <strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #007bff;">{{from_email}}</a>
            </p>
        </div>
        
        <div style="background-color: #fff; border: 1px solid #e9ecef; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #333; font-weight: bold;">Message:</p>
            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e9ecef; margin: 20px 0;">
        
        <p style="margin: 0; color: #666; font-size: 14px;">
            <strong>Reply to:</strong> <a href="mailto:{{reply_to}}" style="color: #007bff;">{{reply_to}}</a>
        </p>
        
    </div>
</body>
</html>
```

## Template Variables
Make sure these variables are configured in your EmailJS template:

- `{{from_name}}` → from_name
- `{{from_email}}` → from_email  
- `{{message}}` → message
- `{{reply_to}}` → reply_to

## Your Current Environment Variables
Update these in your `.env.local` file with your real EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## How to Test
1. Fill out the contact form on your portfolio
2. Check browser console for EmailJS logs
3. Check your email (kawshanmanusha7@gmail.com) for the message

## Status
✅ EmailJS integration code implemented
✅ Demo mode fallback available
✅ Error handling implemented
✅ Success/error messages working
