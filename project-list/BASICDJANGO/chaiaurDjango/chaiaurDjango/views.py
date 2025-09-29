from django.http import HttpResponse
from django.shortcuts import render
def Home(request):
    # return HttpResponse("Hello,world Welcome To HomePage")
    return render(request,'index.html')


def About(request):
    # return HttpResponse("Welcome To About")
    return render(request,'abouttemplate/index.html')


def Contact(request):
    # return HttpResponse("Welcome To Contact Page")
    return render(request,'contacttemplate/index.html')