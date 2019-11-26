#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Feb 12 18:37:32 2019

@author: roberttaddeo
"""

# This program seeks to filter and classify data from poker hands
# The program takes a data set of over 1 million poker hands and gives the user a better understanding of the data
# The program should filter out any hands that have no little chance of winning (high card or less) based on user input

import csv
import re
import string

def getUserInput():
    dataFile = input("Please enter file name containing poker data: ")
    outfile = input("Enter name you would like the ouput file to be called (Please include .csv extension): ")
    headerBool = False
    handBool = False
    header = input("Would you like to add a header to this file? (y/n): ")
    
    if header == "y":
        headerBool = True
    print("\n")
    print("Poker Hand Class: \n 0: Nothing in hand; not a recognized poker hand \n 1: One pair; one pair of equal ranks within five cards \n 2: Two pairs; two pairs of equal ranks within five cards \n 3: Three of a kind; three equal ranks within five cards \n 4: Straight; five cards, sequentially ranked with no gaps \n 5: Flush; five cards with the same suit \n 6: Full house; pair + different rank three of a kind \n 7: Four of a kind; four equal ranks within five cards \n 8: Straight flush; straight + flush \n 9: Royal flush; {Ace, King, Queen, Jack, Ten} + flush ")
    handClass = input("Please enter the lowest hand class you'd like recognized in the scrubbed data by number (0-9): ")
    handBoolInput = input("Would you like to include the hand value in the data? (y/n): ")
    if handBoolInput == 'y':
        handBool = True;
    
    scrubData(dataFile, outfile, headerBool, handClass, handBool)

# This function takes in all user input and cleans data from poker dataset accordingly

def scrubData(infile, outfileName, headerBool, handClass, handBool):
    print(infile)
    try:
        with open(infile) as csvfile:
            if(handBool): 
                header=['Flop', 'Flop', 'Flop', 'Turn', 'River', 'Hand Value', 'Numerical Hand Value']
            else :
                 header=['Flop', 'Flop', 'Flop', 'Turn', 'River']
            lines = 0
            reader = csv.reader(csvfile)
            outfile = open(outfileName,'w')
            writer = csv.writer(outfile,delimiter=",")
            if headerBool == True:
                writer.writerow(header)
            for row in reader:
                if(handBool):
                    board = [addSuit(row[0], row[1]), addSuit(row[2], row[3]), addSuit(row[4], row[5]), addSuit(row[6], row[7]), addSuit(row[8], row[9]), rankToString(row[10]), row[10]]
                else:
                    board = [addSuit(row[0], row[1]), addSuit(row[2], row[3]), addSuit(row[4], row[5]), addSuit(row[6], row[7]), addSuit(row[8], row[9])]
                if(int(row[10]) >= int(handClass)):
                    writer.writerow(board)
                    lines = lines + 1
            print("Lines written: " + str(lines))
                
            
                
    except:
        print("Those files didn't work. Please try again")
        getUserInput()
        
    
    
# This fuction takes a suit and rank of a card (defined in the data as a number 1-4) and switches it into a string value
        
def addSuit(suitNum, cardRank):
    if(int(suitNum) == 1):
        return str(cardRank) + "H"
    elif(int(suitNum) == 2):
        return str(cardRank) + "S"
    elif(int(suitNum) == 3):
        return str(cardRank) + "D"
    else:
        return str(cardRank) + "C"
    
# This function takes the rank of a hand, and changes the number value to a categorical value
        
def rankToString(handClass):
    if(int(handClass) == 1):
        return "One pair"
    elif(int(handClass) == 2):
        return "Two pair"
    elif(int(handClass) == 3):
        return "Three of a Kind"
    elif(int(handClass) == 4):
        return "Straight"
    elif(int(handClass) == 5):
        return "Flush"
    elif(int(handClass) == 6):
        return "Full House"
    elif(int(handClass) == 7):
        return "Four of a Kind"
    elif(int(handClass) == 8):
        return "Straight Flush"
    elif(int(handClass) == 9):
        return "Royal Flush"
    else:
        return "Nothing in the hand"            


getUserInput()

