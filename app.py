from flask import Flask, render_template, request, redirect, url_for
import json
from datetime import datetime

app = Flask(__name__)

# Simple in-memory storage (in a real app, you'd use a database)
tasks = []

@app.route('/')
def index():
    return render_template('index.html', tasks=tasks)

@app.route('/add_task', methods=['POST'])
def add_task():
    task = request.form.get('task')
    if task:
        tasks.append({
            'id': len(tasks) + 1,
            'content': task,
            'done': False,
            'created_at': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        })
    return redirect(url_for('index'))

@app.route('/toggle_task/<int:task_id>')
def toggle_task(task_id):
    for task in tasks:
        if task['id'] == task_id:
            task['done'] = not task['done']
            break
    return redirect(url_for('index'))

# Add this for Vercel
app.debug = False

# Change this to work with Vercel
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000) 