import math
nextIndex = 0
count = 0
values=[]
count = count+1
if (count%10) == 0:
    nextIndex = 0
    nextIndex+=1
    values[nextIndex]=values
def mean(values):
    return sum(values)/len(values)
def variance(values):
  
    length = len(values)

    #because we are dealing with variance, we need to know the mean
    #so we call the mean function with our list values
    m = mean(values)

    #create a sum variable since this is not the same
    total_sum = 0

    #start a for loop going through each number in values
    for i in range(length): #creates a list 0 - length minus one

        #minus the mean from each value
        total_sum += (values[i]-m)**2
        var=(total_sum/length)
    #return the standard deviation
    return (var)    
def stanDev(values):
    #Values is the list of numbers

    leng = len(values)

    #find the sqare root of the variance to get standard dev
    m = variance(values)
    deviation=m**(1/2)
    return deviation
    #As the variance increases so does the standard deviation. Since the variance is a square of the deviation.
    
    #if the standard deviation value is greater than 1/4 of the mean, that value is NOT safe
    #send an alert
    
def alert(values):
    p=input("Enter Value Bound: ")
    val=float(p)
    if (stanDev(values)>val*mean(values)):
        print ("Please StoP Running")
    else:
        print("Your'e Safe")
#This value may be too loose but can be adjusted by the medical professional
#After testing it was found that instead of 1/4, 0.15 may be a more suitable value, for example with the array below
l=[83,90,120,130,89]
