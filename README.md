# Flask Todo App with Vercel Deployment

A simple, elegant Todo application built with Flask and automatically deployed to Vercel using GitHub Actions.

## 🚀 Features

- Create and manage todo tasks
- Mark tasks as complete/incomplete
- Timestamp tracking for tasks
- Responsive web interface
- Automatic deployment to Vercel
- CI/CD pipeline with GitHub Actions

## 🛠️ Technology Stack

- **Backend**: Python Flask
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── static/
│   └── style.css          # CSS styles
├── templates/
│   └── index.html         # Main HTML template
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── vercel.json           # Vercel configuration
└── README.md             # Project documentation
```

## 🔧 Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Set up Python virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

## 🌐 Deployment

The application is configured for automatic deployment to Vercel through GitHub Actions.

### Prerequisites for Deployment

1. **Vercel Account Setup**
   - Create a Vercel account at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm install -g vercel`
   - Login to Vercel: `vercel login`

2. **GitHub Repository Setup**
   - Add the following secrets to your GitHub repository:
     - `VERCEL_TOKEN`: Your Vercel authentication token
     - Navigate to Settings > Secrets > Actions to add these

### Deployment Process

1. The deployment is automatically triggered when you push to the main branch
2. GitHub Actions workflow:
   - Checks out the code
   - Sets up Python environment
   - Installs dependencies
   - Installs Vercel CLI
   - Pulls Vercel environment information
   - Builds and deploys to Vercel

### Manual Deployment

You can also deploy manually using Vercel CLI:
```bash
vercel
```

## ⚙️ Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.py",
      "use": "@vercel/python"
    },
    {
      "src": "static/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "app.py"
    }
  ]
}
```

### requirements.txt
```
Flask==2.0.1
Werkzeug==2.0.3
gunicorn==20.1.0
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the maintainers. 