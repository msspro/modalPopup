hs.graphicsDir = 'https://msspro.github.io/modalPopup/modalPopup/highslide/graphics/';
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';

//(function() {
	
		const urlInfo = 'http://8a0c8984a87c.ngrok.io/ecommerce';
		const urlPago = 'https://www.atratopago.com/formulario';
	
		const addbtnAtratoInfo = () => {
			var divAtratoInfo = document.getElementById("higslide-div-atrato-info");
			if (divAtratoInfo === null){
				return;
			};
			// Agregar el codigo necesario a visualizar en el control.
		    const innerHTML = `
						<a id='linkHref1' href="${urlInfo}" class="btn-atrato-info-link"  style="display:block" 
							onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )">
							boton atrato info
						</a>
												
		  `;
		  divAtratoInfo.innerHTML = innerHTML;		  
		};
		
		const addbtnAtratoPago = () => {
			var divAtratoPago = document.getElementById("higslide-div-atrato-pago");
			if (divAtratoPago === null){
				return;
			}
			
			// Agregar el codigo necesario a visualizar en el control.
		    const innerHTML = `
						<a id='linkHref1' href="${urlPago}"  class="btn-atrato-info-link"  style="display:block" 
							onclick="return hs.htmlExpand(this, { objectType: 'iframe' } )">
							boton atrato pago
						</a>
						
						
		  `;
		  divAtratoPago.innerHTML = innerHTML;		  
		};

		//addbtnAtratoInfo();
		//addbtnAtratoPago();

//})();
document.addEventListener("DOMContentLoaded",addbtnAtratoInfo,false);
document.addEventListener("DOMContentLoaded",addbtnAtratoPago,false);

