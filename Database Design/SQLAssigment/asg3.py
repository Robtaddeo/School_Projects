#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Feb 20 13:39:09 2019

@author: roberttaddeo
"""

#Pandas opening the poker data set
import pandas as pd

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


def runItBack():
    response = input("Would you like to make another query? (y/n): ")
    if response == 'y':
        pandasOpen()
    else: 
        print("Thank you. Goodbye!")


def pandasOpen():
    file_name = "outfile.csv"
    df=pd.read_csv(file_name,sep=',',encoding='utf-8')
    
    # Query Selector
    
    print("This program can execute different queries on a poker hand data set. Below are the queries possible")
    print("1. Sort by worst hand to best hand")
    print("2. Sort by best hand to worst hand")
    print("3. See which hand is most likely to occur")
    print("4. See what hands beat a hand value")
    print("5. See a bar chart of the data")
    response = input("Please enter the number of the query you'd like to execute: ")
    
    # Checks User Input
    if response == str(1): #If user inputs 1, rank the hands from worst to best using Numerical Hand Value
        print("Sorting from worst hand to best hand")
        sortHandAsc =df.sort_values("Numerical Hand Value")
        print(sortHandAsc[["Flop", "Flop.1", "Flop.2", "Turn", "River", "Hand Value"]])
        runItBack()
        
    elif response == str(2): # If user inputs 2, ranks the hand from best to worst using Numerical Hand Value
        print("Sorting from best hand to worst hand")
        sortHandDec =df.sort_values("Numerical Hand Value", ascending=False)
        print(sortHandDec[["Flop", "Flop.1", "Flop.2", "Turn", "River", "Hand Value"]])
        runItBack()
    
    elif response == str(3): # If user inputs 3, counts all instances of Hand Value and aggregates it
        handMean = df["Numerical Hand Value"].mean()
        print("Based on the mean of the data, which is",handMean, ",the most common hand in poker is nothing in the hand")
        runItBack()
        
    elif response == str(4): # If the user inputs 4, prompts user for a hand value and lists all possibilities that beat it
        print("Poker Hand Class: \n 0: Nothing in hand; not a recognized poker hand \n 1: One pair; one pair of equal ranks within five cards \n 2: Two pairs; two pairs of equal ranks within five cards \n 3: Three of a kind; three equal ranks within five cards \n 4: Straight; five cards, sequentially ranked with no gaps \n 5: Flush; five cards with the same suit \n 6: Full house; pair + different rank three of a kind \n 7: Four of a kind; four equal ranks within five cards \n 8: Straight flush; straight + flush \n 9: Royal flush; {Ace, King, Queen, Jack, Ten} + flush ")
        numHandValue = input("What Hand class would you like to see beat?: (0-9)")
        
        print("Hands that beat", rankToString(numHandValue))
        
        selection1 = df.loc[(df["Numerical Hand Value"]>int(numHandValue))]
        
        print(selection1[["Flop", "Flop.1", "Flop.2", "Turn", "River", "Hand Value"]])
        count =  df.loc[(df["Numerical Hand Value"]>int(numHandValue))].count()
        print("There are", count[0], "hands that beat", rankToString(numHandValue))
        runItBack()
        
    elif response == str(5): # If the user inputs 5, plot all hand values on a bar chart
        df.plot.hist()
        runItBack()
        
    else:
        print("Please enter a valid query selection")
        pandasOpen()
        
        
        
    
pandasOpen()

