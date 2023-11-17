/*
*   Author: Travolgi
*   Author URI: https://travolgi.it
*   Date: 01/2020
*/
function brandAssets() {
    const gridToggle = e => {
        const ele = e.target.id,
              labelAction = document.querySelectorAll('.label-action'),
              gridAurea = document.querySelector('#svgSezAurea').contentDocument.querySelector('#grid'),
              gridSpace = document.querySelector('#svgSpace').contentDocument.querySelector('#grid');
        if(ele === 'conceptOnOff') {
            let l = labelAction[0];
            gridAurea.classList.toggle('opacity-0');
            l.textContent === 'mostra griglia' ? l.textContent = 'nascondi griglia' : l.textContent = 'mostra griglia';
        } else {
            let l = labelAction[1];
            gridSpace.classList.toggle('opacity-0');
            l.textContent === 'mostra griglia' ? l.textContent = 'nascondi griglia' : l.textContent = 'mostra griglia';
        }
    }

    const version = e => {
        let svgVersion = document.querySelector('#svgVersioni'),
            ele = e.target.id;
        svgVersion.querySelectorAll('g').forEach(ge => ge.style.opacity = 0);
        switch (ele) {
            case 'verOrizzontale':
            case 'verVerticale':
                svgVersion.querySelector('#verPittogramma').style.opacity = 1;
                svgVersion.querySelector('#'+ele).style.opacity = 1;
                break;
            case 'verPittogramma':
                svgVersion.querySelector('#'+ele).style.opacity = 1;
                break;
            case 'verLogotipo':
                svgVersion.querySelector('#verOrizzontale').style.opacity = 1;
                break;
            default:
                svgVersion.querySelector('#verPittogramma').style.opacity = 1;
                svgVersion.querySelector('#verOrizzontale').style.opacity = 1;
                break;
        }
    }

    const changeSizeLogo = () => {
        const logoSize = document.querySelector('#logoSize'),
              sizeOutput = document.querySelector('#sizeOutput');
        logoSize.style.width = inputSizeLogo.value+'rem';
        let val = parseInt(inputSizeLogo.value) + 6 + ' mm';
        val == '24 mm' ? val='&infin;' : val;
        sizeOutput.textContent = val;
    }

    const variant = e => {
        let ele = e.target.id;
        const boxVarianti = document.querySelector('#varianti'),
              objVarianti = document.querySelector('#svgVarianti').contentDocument,
              svgVarianti = objVarianti.querySelector('svg');
        let classPurple = objVarianti.querySelectorAll('.colorPurple'),
            classOrange = objVarianti.querySelector('.colorOrange'),
            bgBox, txtColor, orange, purple;
        switch (ele) {
            case 'varBianco': 
                bgBox = '#ffffff';
                txtColor = orange = purple = '#000000';
                break;
            case 'varNero':
                bgBox = '#000000';
                txtColor = orange = purple = '#ffffff';
                break;
            case 'varColori':
                bgBox = '#ffffff';
                txtColor = '#000000';
                purple = '#890052';
                orange = '#ff9200';
                break;
            case 'varNegativo':
                bgBox = '#000000';
                txtColor = purple = '#ffffff';
                orange = '#ff9200';
                break;
            case 'varViola':
                bgBox = '#890052';
                txtColor = purple = '#ffffff';
                orange = '#ff9200';
                break;
        }
        boxVarianti.style.backgroundColor = bgBox;
        boxVarianti.style.color = txtColor;
        svgVarianti.style.color = txtColor;
        classPurple.forEach(ele => ele.style.color = purple);
        classOrange.style.color = orange;
    }

    function inViewport(ele){
        let e = ele.getBoundingClientRect();
        return !(e.top > innerHeight/2 || e.bottom < 0);
    }
    const typoViewPort = e => {
        let typoE = document.querySelector('#typoE'),
            gridTypoE = document.querySelector('#gridTypoE');
        if(inViewport(typoE)){
            gridTypoE.style.display = 'block';
        } else {
            gridTypoE.style.display = 'none';
        }
    }

    const gridConcept = document.querySelector('#conceptOnOff'),
          configuation = document.querySelector('#versioni ul'),
          gridMinSpacing = document.querySelector('#spaceOnOff'),
          inputSizeLogo = document.querySelector('#sizeLogoBar'),
          variants = document.querySelector('#varianti ul');

    const addListeners = () => {
        // concept
        gridConcept.addEventListener('click', gridToggle);
        // configuation
        configuation.addEventListener('click', version, true);
        // minSpacing
        gridMinSpacing.addEventListener('click', gridToggle);
        // minSize 
        inputSizeLogo.addEventListener('input', changeSizeLogo);
        // variants
        variants.addEventListener('click', variant, true);
        // typography
        document.addEventListener('scroll', typoViewPort);
    }
    
    return {
        init: function() {
            addListeners();
        }
    }
}
const myBrand = brandAssets();
myBrand.init();