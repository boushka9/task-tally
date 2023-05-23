import mysql.connector

def insert_task(cursor, title, description, status, created_at);
    query = 
    values = (title, description)
    cursor.execute(query, values)


connection = mysql.connector.connect(
    host="localhost",
    user="your_username",
    password="your_password",
    database="your_database"
)
cursor = connection.cursor()

tasks = [
    
]


    insert_task(cursor, task)


connection.commit()
connection.close()