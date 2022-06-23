import json
import pyodide

from js import console
##
def run(name, age):
    if(not name):
        return "<i>name</i> not defined"
    if(not age):
        return "<i>age</i> not defined"
    ##
    print(f"Hello <b>{name}</b>. Nice to meet you.")
    if(age < 18):
        print("We welcome all script kiddies")
    if(age > 18 and age < 33):
        print("It seems you are a senior dev")
    if(age > 40):
        print("I thought Dinos were extinct!")
    print("<i>just kidding lmao</i>")
##
print("🐍: Hi from Python. Fill the form in JS to get a return from Py")