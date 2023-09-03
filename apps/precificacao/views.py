from django.shortcuts import render

def index( request ):
    url = "precifica/produtos/dashboard_produtos.html"
    return render(request, url)

def produto_individual( request ):
    return render(request, "precifica/produtos/produto-individual.html")

def item_indivdual( request ):
    return render( request, "precifica/itens/item_individual_comprado.html")