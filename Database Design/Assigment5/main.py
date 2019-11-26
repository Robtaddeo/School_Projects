#!/usr/bin/python3
import cgi
import sqlite3

import cgitb
cgitb.enable()

print ("Content-Type: text/html\r\n\r\n")
print ( "<html>\n<head>")
print ( "<title>sqlite selection</title>")
print ( '''<link href="style.css" rel="stylesheet" type="text/css" />''')
print(" </head>")
print ( "<body>")


form = cgi.FieldStorage()
header = "FIFA 19 Complete Players Dataset Assignment"

print ( "<h4>"+header+"<br></h4>\n")

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


# gather the data from the sqlite database
conn = sqlite3.connect('players.db')
c = conn.cursor()

query = "SELECT Photo, Name, Nationality, Club, Overall, SprintSpeed, Strength FROM players WHERE Overall >= "+ str(overall) +" AND SprintSpeed >= "+ str(sprintSpeed) +" AND Strength >= "+ str(strength) +" AND Nationality = '" + nationality + "' ;"

c.execute(query)

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
for Photo, Name, Nationality, Club, Overall, SprintSpeed, Strength in c:
    print ("<tr>")
    print ("<td><img src='"+ Photo        +"'></img></td>")
    print ("<td>"+ Name      +"</td>")
    print ("<td>"+ Nationality +"</td>")
    print ("<td>"+ Club +"</td>")
    print ("<td>", Overall , "</td>")
    print ("<td>", SprintSpeed , "</td>")
    print ("<td>", Strength, "</td>")
    print ("</tr>")

print ("</table>")

# close the cursor
c.close()

print("</body>")
print("</html>")