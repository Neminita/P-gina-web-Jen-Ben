from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'tienda/inicio.html')
def carrito(request):
    return render(request, 'tienda/vCarrito.html')
def clasica(request):
    return render(request, 'tienda/vclasica.html')
def contacto(request):
    return render(request, 'tienda/vContacto.html')
def inisesion(request):
    return render(request, 'tienda/vInicioSesion.html')
def jazz(request):
    return render(request, 'tienda/vjazz.html')
def nosotros(request):
    return render(request, 'tienda/vNosotros.html')
def registro(request):
    return render(request, 'tienda/vRegistro.html')
def rock(request):
    return render(request, 'tienda/vrock.html')
