from django.shortcuts import render
from django.shortcuts import render_to_response


def principal(request): 
    return render_to_response("index.html")

# Create your views here.
