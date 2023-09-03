from django.shortcuts import render

def index( request ):
    url = "precifica/produtos/dashboard_produtos.html"
    return render(request, url)
