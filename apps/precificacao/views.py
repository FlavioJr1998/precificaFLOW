from django.shortcuts import render

def index( request ):
    url = "precifica/rateio/dashboard_inicial.html"
    return render(request, url)

### PRODUTO ###
def dashboard_inicial_produtos( request ):
    return render( request, "precifica/produtos/dashboard_produtos.html")

def cadastro_produto( request ):
    return render( request, "precifica/produtos/cadastro_produto.html")

def produto_individual( request ):
    return render(request, "precifica/produtos/produto_individual.html")

### ITEM ###
def item_indivdual( request ):
    return render( request, "precifica/itens/item_individual_comprado.html")

### RATEIO ###
def rateio_custos( request ):
    return render( request, "precifica/rateio/rateio_custos.html")
