from django.shortcuts import render
from .models import Vinilo
from .models import Jazz
from .models import Clasica
from .models import Rock
from .forms import ViniloForm


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

    jazzs = Jazz.objects.all()
    data = {"jazzs" : jazzs}

    return render(request, 'tienda/vjazz.html', data)

def nosotros(request):
    return render(request, 'tienda/vNosotros.html')
    
def registro(request):
    return render(request, 'tienda/vRegistro.html')

def rock(request):
    return render(request, 'tienda/vrock.html') 

def agregar_producto(request):
    data = {'form' : ViniloForm()}
    if request.method == 'POST':
        formulario = ViniloForm(data=request.POST, files=request.FILES) 
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Guardado Correctamente"
        else:
            data["form"] = formulario
    return render(request, 'tienda/vinilo/agregar.html', data)