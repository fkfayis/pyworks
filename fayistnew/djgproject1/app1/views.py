from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse('hello django')
def index(request):
    return render(request,'temp.html')