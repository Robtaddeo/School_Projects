#!/usr/bin/python3
import cgi
import sqlite3

import cgitb
cgitb.enable()

print ("Content-Type: text/html\r\n\r\n")
print ( "<html>\n<head>")
print ( "<title>Python Web Assignment</title>")
print ( '''<link href="asg5_rt1727_style.css" rel="stylesheet" type="text/css" />''')
print(" </head>")
print ( "<body>")

form = cgi.FieldStorage()
user_name = "FIFA 19 Player Data Assignment 5"

print ( "<h4>"+user_name+"<br></h4>\n")

try: 
    overall = int(form["overall"].value)
except: 
    overall = 0

try: 
    sprintSpeed = int(form["sprintSpeed"].value)
except: 
    sprintSpeed = 0

try: 
    strength = int(form["strength"].value)
except: 
    strength = 0

nationality = form["country"].value




conn = sqlite3.connect('asg5_rt1727_players.db')
conn.row_factory = sqlite3.Row





query = "SELECT Photo, Name, Nationality, Club, Overall, SprintSpeed, Strength FROM players WHERE Overall >= "+ str(overall) +" AND SprintSpeed >= "+ str(sprintSpeed) +" AND Strength >= "+ str(strength) +" AND Nationality = '" + nationality + "' ;"



print("<p><em>Query:  </em>"+query+"</p>")
cursor = conn.execute(query)

print ("<table >")  


print ("<tr>")
print ("<td><b>Picture</b></td>")
print ("<td><b>Name</b></td>")
print ("<td><b>Nationality</b></td>")
print ("<td><b>Club</b></td>")
print ("<td><b>Overall</b></td>")
print ("<td><b>Sprint Speed</b></td>")
print ("<td><b>Strength</b></td>")
print ("</tr>")

# now print the data
for row in cursor:
    # print("<img src='"+ row['Photo']        +"' width='50px'></img>")
    # print ("<p>"+ row['Name']       +"</p>")


    print ("<tr>")
    print ("<td><img src='"+ row['Photo']        +"'></img></td>")
    print ("<td>"+ row['Name']       +"</td>")
    print ("<td>"+ row['Nationality'] +"</td>")
    print ("<td>"+ row['Club'] +"</td>")
    print ("<td>", row['Overall'] , "</td>")
    print ("<td>", row['SprintSpeed'] , "</td>")
    print ("<td>", row['Strength'], "</td>")
    print ("</tr>")

print ("</table>")

# close the cursor
cursor.close()

print("</body>")
print("</html>")