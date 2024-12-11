(function () {
    document.getElementById('formatH').addEventListener('change', function() {
        var value = this.value;
        this.children['padrao'].selected = true;
        if(value=='reset'){
            delElement()
            return;
        }
        insertH(value)
    }); 
    document.getElementById('tamFont').addEventListener('change', function() {
        var value = this.value;
        tamanhoFont(parseInt(value))
        this.children['padrao'].selected = true;

    });
    document.getElementById('typefontface').addEventListener('change', function() {
        var selectedOption = this.children[this.selectedIndex];
        var value = this.value;
        fontFaceSel(value)
        // insertTag('font', 'face="'+value+'"');
    });
})();

var POSTS_RFF_DIR_EDITOR;
function updateDirEditor(){
    POSTS_RFF_DIR_EDITOR = localStorage.getItem("POSTS_RFF_URL_EDITOR");
}

let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup1, false);

function startup1() {
    colorPicker = document.querySelector("#cores");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", cor, false);
    //colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#coresDestaque");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", backColorText, false);
    //colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}




/*********************************** EXCLUIR TAG (EFEITO) INICIO **************************************/


function delElement(){
    var range = window.getSelection().getRangeAt(0);
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    console.log(selecao)
    var tag = selecao.parentNode;
    console.log(tag);
    let pai = tag.parentNode;
    if(pai.nodeName=='DIV'){
        if(pai.getAttribute('id')=='texto' && pai.getAttribute('id')!=null){
            return;
        }
    }
    let tt = document.createTextNode(tag.innerHTML);
    pai.replaceChild(tt, tag);

    // let p = pai.outerHTML;
    // // pai.removeChild(tag)
    // var t = tag.outerHTML;
    // // console.log(t)

    // let abre = '';
    // let fecha = '';
    // if(getTagName(tag.nodeName)=='p'){
    //     abre = '<'+getTagName(tag.nodeName)+' class="p">';
    //     fecha = '</'+getTagName(tag.nodeName)+'>';
    //     // console.log('era para ter pego o class '+tag.nodeName)
    // }else{
    //     abre = '<'+getTagName(tag.nodeName)+'>';
    //     fecha = '</'+getTagName(tag.nodeName)+'>';
    // }
    // // console.log('--->>'+getTagName(tag.nodeName))
    // // t = t.replace(abre, '');
    // // t = t.replace(fecha, '');
    // p = p.replace(abre, '');
    // p = p.replace(fecha, '');

    // abre = '<'+getTagName(pai.nodeName)+'>';
    // fecha = '</'+getTagName(pai.nodeName)+'>';
    // // t = t.replace(abre, '');
    // // t = t.replace(fecha, '');
    // p = p.replace(abre, '');
    // p = p.replace(fecha, '');
    // pai.innerHTML = p
    // // document.execCommand('insertHTML', true, pai)
    range.insertNode(pai);
}

function getTagName(tag){
    if(tag == 'DIV'){
        return 'div';
    }else if(tag=='B'){
        return 'b';
    }else if(tag=='RFFEFEITOBGTEXT1'){
        return 'rffefeitobgtext1';
    }else if(tag=='RFFEFEITOBGTEXT2'){
        return 'rffefeitobgtext2';
    }else if(tag=='RFFEFEITOBGTEXT3'){
        return 'rffefeitobgtext3';
    }else if(tag=='RFFEFEITOBGTEXT4'){
        return 'rffefeitobgtext4';
    }else if(tag=='RFFEFEITOBGTEXT5'){
        return 'rffefeitobgtext5';
    }else if(tag=='RFFEFEITOBGTEXT6'){
        return 'rffefeitobgtext6';
    }else if(tag=='RFFEFEITOBGTEXT7'){
        return 'rffefeitobgtext7';
    }else if(tag=='RFFEFEITOBGTEXT8'){
        return 'rffefeitobgtext8';
    }else if(tag=='RFFEFEITOBGTEXT9'){
        return 'rffefeitobgtext9';
    }else if(tag=='RFFEFEITOBGTEXT10'){
        return 'rffefeitobgtext10';
    }else if(tag=='RFFEFEITOBGTEXT11'){
        return 'rffefeitobgtext11';
    }else if(tag=='RFFEFEITOBGTEXT12'){
        return 'rffefeitobgtext12';
    }else if(tag=='RFFEFEITOBGTEXT13'){
        return 'rffefeitobgtext13';
    }else if(tag=='RFFEFEITOBGTEXT14'){
        return 'rffefeitobgtext14';
    }else if(tag=='RFFEFEITOBGTEXT15'){
        return 'rffefeitobgtext15';
    }else if(tag=='RFFEFEITOBGTEXT16'){
        return 'rffefeitobgtext16';
    }else if(tag=='RFFEFEITOBGTEXT17'){
        return 'rffefeitobgtext17';
    }else if(tag=='RFFEFEITOBGTEXT18'){
        return 'rffefeitobgtext18';
    }else if(tag=='RFFEFEITOBGTEXT19'){
        return 'rffefeitobgtext19';
    }else if(tag=='RFFEFEITOBGTEXT20'){
        return 'rffefeitobgtext20';
    }else if(tag=='RFFEFEITOBGTEXT21'){
        return 'rffefeitobgtext21';
    }else if(tag=='RFFEFEITOBGTEXT'){
        return 'rffefeitobgtext';
    }else if(tag=='RFFTEXTSHADOW'){
        return 'rfftextshadow';
    }else if(tag=='RFFNEONTEXT'){
        return 'rffneontext';
    }else if(tag=='RFFNEONTEXTECOLORWHITE'){
        return 'rffneontextecolorwhite';
    }else if(tag=='RFFTEXT3D'){
        return 'rfftext3d';
    }else if(tag=='RFFTEXT3DSIMPLES'){
        return 'rfftext3dsimples';
    }else if(tag=='RFFTEXT3DEXTREME'){
        return 'rfftext3dextreme';
    }else if(tag=='RFFTEXTDEGRADE'){
        return 'rfftextdegrade';
    }else if(tag=='CITE'){
        return 'cite';
    }else if(tag=='A'){
        return 'a';
    }else if(tag=='P'){
        return 'p';
    }else if(tag=='H1'){
        return 'h1';
    }else if(tag=='H2'){
        return 'h2';
    }else if(tag=='H3'){
        return 'h3';
    }else if(tag=='H4'){
        return 'h4';
    }else if(tag=='H5'){
        return 'h5';
    }
}

function getTags(){
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    // console.log(selecao)
    var tag = selecao.parentNode;
    // console.log('111111111111111111111111-------------'+tag.nodeName)
    // console.log(getTagName(tag.nodeName))
    return getTagName(tag.nodeName)
}

/*********************************** EXCLUIR TAG (EFEITO) INICIO **************************************/



/*********************************** MARCAR OS BOTÕES QUE FORAM ATIVADOS INICIO **************************************/
    var tags = [];
function selectElem(){
    // console.log('........................................................')
    // console.log(tags)
        let selFont = document.getElementById('typefontface');
        selFont.children['padrao'].selected = true;

        selFont = document.getElementById('tamFont');
        selFont.children['padrao'].selected = true;
    for(let j=1;j<(tags.length-1);j++){
    // console.log(tags[j].nodeName)
        if(tags[j].nodeName!='FONT' && tags[j].nodeName!='TD' && tags[j].nodeName!='TR' && tags[j].nodeName!='TBODY' && tags[j].nodeName!='TABLE'){
            // console.log(tags[j].nodeName)
            // console.log(returnBtName(tags[j].nodeName))
            document.getElementById(returnBtName(tags[j].nodeName)).setAttribute('style', 'background-color:none;')
        }
    }

    tags = [];
    // console.log('******************************************************************')
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    // console.log(selecao.parentNode.parentNode)
    tags.push(selecao)
    // console.log('apos o primeiro push')
    for(let i=0; i<10; i++){
            // console.log(tags[i].parentNode.nodeName)
        if(tags[i].parentNode.nodeName=='DIV'){
            tags.push(tags[i].parentNode)
            // console.log('está na div')
            break;
            // console.log('aqui não é para aparecer')
        }else{
            tags.push(tags[i].parentNode)
        }
        elementInsert(tags[i].parentNode.nodeName, tags[i].parentNode)
    }
    // let testafont = selecao.parentNode;
    // console.log('++++++++++++++++++'+testafont.nodeName)
    // if(testafont.nodeName=='FONT'){
    // }
    // console.log(tags)
    // var tag = selecao.parentNode;
    // console.log(getTagName(tag.nodeName))
    // console.log(tag.nodeName)
    // elementInsert(tag.nodeName);
}
function returnBtName(ele, node){
    // console.log('-----............-----'+ele)
    if(ele=='B'){
        obj='negrito';
    }else if(ele=='I'){
        obj='italico';
    }else if(ele=='STRIKE'){
        obj='strike';
    }else if(ele=='U'){
        obj='sublinhado';
    }else if(ele=='SUB'){
        obj='subescrito';
    }else if(ele=='SUP'){
        obj='superescrito';
    }else if(ele=='RFFEFEITOBGTEXT'){
        obj='rffEfeitoBGText';
    }else if(ele=='RFFTEXTSHADOW'){
        obj='rffTextShadow';
    }else if(ele=='RFFNEONTEXT'){
        obj='rffNeonText';
    }else if(ele=='RFFNEONTEXTECOLORWHITE'){
        obj='rffNeonTextEColorWhite';
    }else if(ele=='RFFTEXT3D'){
        obj='rffText3D';
    }else if(ele=='RFFTEXT3DSIMPLES'){
        obj='rffText3DSimples';
    }else if(ele=='RFFTEXT3DEXTREME'){
        obj='rffText3DExtreme';
    }else if(ele=='RFFTEXTDEGRADE'){
        obj='rffTextDegrade';
    }else if(ele=='CITE'){
        obj='cite';
    }else if(ele=='A'){
        obj='insertHyperLink';
    }else if(ele=='P'){
        obj='p';
    }else if(ele=='FONT'){
        obj='font';
    }
    return obj;
}

function elementInsert(ele, nodeEl){
    var obj;
    // console.log(ele)
    obj = returnBtName(ele);
    negritaBt(obj, nodeEl)

}
function negritaBt(obj, nodeEl){
    // console.log(obj)
    if(obj=='font'){
        if(nodeEl.getAttribute('face')!=null){
            // console.log('O tipo da fonte é: '+nodeEl.getAttribute('face'))
            let selFont = document.getElementById('typefontface');
            selFont.children[nodeEl.getAttribute('face')].selected = true;
        }
        if(nodeEl.getAttribute('size')!=null){
            // console.log('O tipo da fonte é: '+nodeEl.getAttribute('size'))
            let selFont = document.getElementById('tamFont');
            let n =  nodeEl.getAttribute('size');
            n=n-1;
            selFont.children[n].selected = true;
        }
    }else{
        var o = document.getElementById(obj);
        // alert(o.src)
        if(o!=null){
            o.setAttribute('style', 'background-color: #cdcdcd;')
        }
    }
}

var quadro = document.getElementById('texto')
quadro.addEventListener('keydown', function(e){
    // switch (e.keyCode) {
    //     case 37:
    //         str = 'Left Key pressed!';
    //         break;
    //     case 38:
    //         str = 'Up Key pressed!';
    //         break;
    //     case 39:
    //         str = 'Right Key pressed!';
    //         break;
    //     case 40:
    //         str = 'Down Key pressed!';
    //         break;
    // }
    // alert(str)
    selectElem();
})
quadro.addEventListener('mouseup', function(){
    // console.log(tags)
    selectElem();
    verifyElementFocus();
})



/*********************************** MARCAR OS BOTÕES QUE FORAM ATIVADOS FIM **************************************/







function insertVi(){
    var url = document.getElementById('url').value;
    var vizualiza = document.getElementById('videoVisualiza');
    vizualiza.innerHTML = ifrm;
}



function openWindowLink(){
    updateDirEditor();
    var selecao = window.getSelection().getRangeAt(0).startContainer;
    // console.log(selecao)
    var tag = selecao.parentNode;
    // console.log('555555555555555555555555-------------'+tag.nodeName)
    if(tag.nodeName=='A'){
        // console.log(tag.getAttribute('href'))
        // console.log(tag.getAttribute('target'))
        localStorage.setItem('link', tag.getAttribute('href'))
        localStorage.setItem('target', tag.getAttribute('target'))
        window.open(POSTS_RFF_DIR_EDITOR+'windowEditLink.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }else{
        window.open(POSTS_RFF_DIR_EDITOR+"windowInsertLink.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }
}

function link(link, target) {
    //document.execCommand("createLink", true, "https://www.google.com");
    //document.execCommand("createLink", true, link);
    // console.log(target)
    document.getElementById('insertHyperLink').setAttribute('style', 'background-color:#cdcdcd;');
    selection = window.getSelection().toString();
    var link = '<a href="'+link+'"'+target+'>'+selection+'</a>';
    document.execCommand("insertHTML", true, link);
    selectElem()
}
function unlink() {
    document.execCommand("unlink", false, null);
    selectElem();
}
function justificar() {
    document.execCommand("justifyFull");
}
function alinharEsquerda() {
    document.execCommand("justifyLeft");
}
function alinharDireita() {
    document.execCommand("justifyRight");
}
function alinharCentro() {
    document.execCommand("justifyCenter");
}

function italico() {
    document.execCommand("italic", window.getSelection(), null);
}
function negrito() {
    document.execCommand("bold");
}
function sublinhado() {
    document.execCommand("underline", window.getSelection(), null);
}
function cor() {
    var cores = document.getElementById('cores');
    document.execCommand('styleWithCSS', false, true);
    document.execCommand("foreColor", window.getSelection(), cores.value);
}

function backColorText() {
    var cores = document.getElementById('coresDestaque');
    document.execCommand("backColor", window.getSelection(), cores.value);
}

function corText(cor) {
    document.execCommand("foreColor", window.getSelection(), '#'+cor);
}

function backColorTextNew(color) {
    document.execCommand("backColor", window.getSelection(), '#'+color);
}

function tamanhoFont(size) {
    document.execCommand("fontsize", true, size);
}

function fontFaceSel(font) {
    document.execCommand("fontname", true, font);
}

function copiar() {
    document.execCommand("copy", false, null);
}

function recortar() {
    document.execCommand("cut", false, null);
}
 
function colar() {
    document.execCommand("paste", false, null);
}

function ordenarLista(){
    document.execCommand("insertOrderedList", false, null);
}

function unOrdenarLista(){
    document.execCommand("insertUnorderedList", false, null);
}

function desfazer(){
    document.execCommand("undo", false, null);
}

function refazer(){
    document.execCommand("redo", false, null);
}

function removeFormatT(){
    document.execCommand("removeFormat", false, null);
}

function addStrikeThrough(){
    document.execCommand("strikeThrough", false, null);
}

function addSubScript(){
    document.execCommand("subscript", false, null);
}

function addSuperScript(){
    document.execCommand("superscript", false, null);
}

function addIdent(){
    document.execCommand("indent", false, null);
}

function addOutIdent(){
    document.execCommand("outdent", false, null);
}

function teste(){
    window.getSelection().getRangeAt(0).insertNode(id_('bold').firstChild);
}

function tagRffTextShadow() {
    selection = window.getSelection().toString();
    // console.log(selection)
    wrappedselection = '<rffTextShadow>' + selection + '</rffTextShadow>';
    //var img = new Image();
    document.execCommand('insertHTML', false, wrappedselection);
}

function insertTagsNew(valor) {
    if(valor.toLowerCase() == getTags()){
        // alert(valor)
        document.getElementById(valor).setAttribute('style', 'background-color:none;');
        // selectElem();
        delElement();
        exit;
    }
    selection = window.getSelection().toString();
    wrappedselection = '<'+valor+'>' + selection + '</'+valor+'>';
    //var img = new Image();
    document.execCommand('insertHTML', false, wrappedselection);
}

function insertTag(valor, style) {
    if(valor.toLowerCase() == getTags()){
        // alert(valor)
        document.getElementById(valor).setAttribute('style', 'background-color:none;');
        // selectElem();
        delElement();
        exit;
    }
    selection = window.getSelection().toString();
    // console.log(selection)
    wrappedselection = '<'+valor+' '+style+'>' + selection + '</'+valor+'>';
    //var img = new Image();
    document.execCommand('insertHTML', false, wrappedselection);
}

function CssFnctn() {
    document.execCommand('formatblock', false, 'h1')
    var listId = window.getSelection().anchorNode.parentNode;
    listId.classList = 'oder2';
}


function insertH(valor) {
    selection = window.getSelection().toString();
    // console.log(selection)
    wrappedselection = '<'+valor+'>' + selection + '</'+valor+'>';
    //var img = new Image();
    document.execCommand('insertHTML', false, wrappedselection);
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/********************************* Cria e edita tabela INICIO ***************************************************/


/////////////////////////////////////////////////////////
/************ Cria a tabela e o menu junto *************/
/////////////////////////////////////////////////////////

function insertTable() {
    updateDirEditor();
    console.log(POSTS_RFF_DIR_EDITOR+"windowInsertTable.php")
    window.open(POSTS_RFF_DIR_EDITOR+"windowInsertTable.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

var styleFirstColumn = 'width: 10px !important; background-color: #cdcdcd; resize: vertical !important; overflow: auto; box-sizing: border-box;';


// function insertTableNovo(numRow, numCol) {
//     selection = window.getSelection().toString();
//     var table ='<div class="tabelaObj" contenteditable="false" spellcheck="false"><div class="configTable" contenteditable="false" spellcheck="false">'
//     // table+='<button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-celula.svg" width="50" title="Opções de mesclagem"></button>';
//     table+='<ul id="menuTable">';
//     table+='<li><img src="rffeditor/imgEditor/mesclar-celula.svg" height="40" title="Opções de mesclagem">';
//     table+='<ul>';
//     table+='<li><button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-lado.svg" height="40" title="Mesclar célula a direita"></button></li>';
//     table+='<li><button id="testeSel" onclick="merge(\'column\', \'add\')"><img src="rffeditor/imgEditor/mesclar-abaixo.svg" height="40" title="Mesclar célula abaixo"></button></li>';
//     table+='<li><button id="testeSel" onclick="merge(\'row\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-lado.svg" height="40" title="Remove mesclagem a direita"></button></li>';
//     table+='<li><button id="testeSel" onclick="merge(\'column\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-abaixo.svg" height="40" title="Remover mesclagem abaixo"></button></li>';
//     table+='</ul>';
//     table+='</li>';

//     table+='<li><img src="rffeditor/imgEditor/configRow.svg" height="40" title="Configuração de linha">';
//     table+='<ul>';
//     table+='<li><button id="testeSel" onclick="insertTrAfter()"><img src="rffeditor/imgEditor/inserttableRowAfter.svg" height="40" title="Inserir linha depois"></li>';
//     table+='<li><button id="testeSel" onclick="insertTrBefore()"><img src="rffeditor/imgEditor/inserttableRowBefore.svg" height="40" title="Inserir linha antes"></li>';
//     table+='<li><button id="testeSel" onclick="delTr()"><img src="rffeditor/imgEditor/deleteTableRowAfter.svg" height="40" title="Apagar linha"></li>';
//     // table+='<li><button id="testeSel" onclick="insertTrAfter()">Inserir linha depois</button></li>';
//     // table+='<li><button id="testeSel" onclick="insertTrBefore()">Inserir linha antes</button></li>';
//     // table+='<li><button id="testeSel" onclick="delTr()">Apagar linha</button></li>';
//     table+='</ul>';
//     table+='</li>';

//     table+='<li><img src="rffeditor/imgEditor/configColumn.svg" height="40" title="Configuração de coluna">';
//     table+='<ul>';
//     table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="rffeditor/imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
//     table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="rffeditor/imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
//     table+='<li><button id="testeSel" onclick="delTd()"><img src="rffeditor/imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
//     table+='</ul>';
//     table+='</li>';

//     table+='<li><img src="rffeditor/imgEditor/configCell.svg" height="40" title="Configurar célula">';
//     table+='<ul>';
//     // table+='<li><button id="testeSel" onclick="rotateTdSel(\'sc\')"><img src="rffeditor/imgEditor/configCell-rotate-text.svg" height="40" title="Rotacionar o texto na célula"></button></li>';
//     // table+='<li><button id="testeSel" onclick="getWindowBckgroundColorTDsel()"><img src="rffeditor/imgEditor/configCell-background.svg" height="40" title="Mudar a cor da célula"></button></li>';
//     // table+='<li><button id="testeSel" onclick="openConfigBorderTdSel()"><img src="rffeditor/imgEditor/configCell-border.svg" height="40" title="Configurar borda da célula"></button></li>';
//     table+='<li><button id="testeSel" onclick="openConfigTdSel()"><img src="rffeditor/imgEditor/configCell-prop.svg" height="40" title="Configurar propriedade da célula"></button></li>';

//     table+='<li><button id="testeSel" onclick="insertCellRight()"><img src="rffeditor/imgEditor/configCell-insert-after.svg" height="40" title="Inserir célula depois"></button></li>';
//     table+='<li><button id="testeSel" onclick="insertCellLeft()"><img src="rffeditor/imgEditor/configCell-insert-before.svg" height="40" title="Inserir célula antes"></button></li>';
//     table+='<li><button id="testeSel" onclick="removeCell()"><img src="rffeditor/imgEditor/configCell-delete.svg" height="40" title="Apagar célula"></button></li>';
//     table+='</ul>';
//     table+='</li>';

//     table+='<li><img src="rffeditor/imgEditor/configTable.svg" height="40" title="Configurar tabela">';
//     table+='<ul>';
//     table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="rffeditor/imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
//     table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="rffeditor/imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
//     table+='<li><button id="testeSel" onclick="delTd()"><img src="rffeditor/imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
//     table+='</ul>';
//     table+='</li>';
//     table+='</ul>';
//     table+='</div>';
//     table += '<table cellspacing="0" class="tabela" id="tabelaInserida" onkeydown="keydownTable(event, this)" onkeyup="keyupTable(event, this)">';
//     for(i=0; i<=numRow; i++){
//         table+='<tr contenteditable="false" spellcheck="false">';
//         // table+='<tr contenteditable="false" spellcheck="false">';
//         if(i==0){
//             for(j=0;j<=numCol;j++){
//                 if(j==0){
//                     table+='<td style="" contenteditable="false" spellcheck="false" id="tableTdInicialPoint"></td>';
//                 }else{
//                     table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialLarg" style=""></td>';
//                 }
//             }
//         }else{
//             for(j=0;j<=numCol;j++){
//                 if(j==0){
//                     // table+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
//                     table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
//                 }else{
//                     table+='<td style="" contenteditable="true" spellcheck="true" onclick="actionClickTd(this)" class="">&nbsp;</td>';
//                     // table+='<td contenteditable="true" spellcheck="true">&nbsp;</td>';
//                 }
//             }
//         }
//         table+='</tr>';
//     }
//     table+='</table></div>';
//     document.execCommand('insertHTML', false, table);
// }




function insertTableNovo(numRow, numCol) {
    updateDirEditor();
    let range = window.getSelection().getRangeAt(0);
    selection = window.getSelection().toString();
    let divPai = document.createElement('div');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('spellcheck', 'false');
    divPai.setAttribute('class', 'tabelaObj');
    var table ='<div class="configTable" contenteditable="false" spellcheck="false">'
    // table+='<button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-celula.svg" width="50" title="Opções de mesclagem"></button>';
    table+='<ul id="menuTable">';
    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-celula.svg" height="40" title="Opções de mesclagem">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-lado.svg" height="40" title="Mesclar célula a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'add\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-abaixo.svg" height="40" title="Mesclar célula abaixo"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'remove\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-remover-lado.svg" height="40" title="Remove mesclagem a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'remove\')"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/mesclar-remover-abaixo.svg" height="40" title="Remover mesclagem abaixo"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configRow.svg" height="40" title="Configuração de linha">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTrAfter()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableRowAfter.svg" height="40" title="Inserir linha depois"></li>';
    table+='<li><button id="testeSel" onclick="insertTrBefore()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableRowBefore.svg" height="40" title="Inserir linha antes"></li>';
    table+='<li><button id="testeSel" onclick="delTr()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/deleteTableRowAfter.svg" height="40" title="Apagar linha"></li>';
    // table+='<li><button id="testeSel" onclick="insertTrAfter()">Inserir linha depois</button></li>';
    // table+='<li><button id="testeSel" onclick="insertTrBefore()">Inserir linha antes</button></li>';
    // table+='<li><button id="testeSel" onclick="delTr()">Apagar linha</button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configColumn.svg" height="40" title="Configuração de coluna">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
    table+='<li><button id="testeSel" onclick="delTd()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell.svg" height="40" title="Configurar célula">';
    table+='<ul>';
    // table+='<li><button id="testeSel" onclick="rotateTdSel(\'sc\')"><img src="rffeditor/imgEditor/configCell-rotate-text.svg" height="40" title="Rotacionar o texto na célula"></button></li>';
    // table+='<li><button id="testeSel" onclick="getWindowBckgroundColorTDsel()"><img src="rffeditor/imgEditor/configCell-background.svg" height="40" title="Mudar a cor da célula"></button></li>';
    // table+='<li><button id="testeSel" onclick="openConfigBorderTdSel()"><img src="rffeditor/imgEditor/configCell-border.svg" height="40" title="Configurar borda da célula"></button></li>';
    table+='<li><button id="testeSel" onclick="openConfigTdSel()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-prop.svg" height="40" title="Configurar propriedade da célula"></button></li>';

    table+='<li><button id="testeSel" onclick="insertCellRight()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-insert-after.svg" height="40" title="Inserir célula depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertCellLeft()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-insert-before.svg" height="40" title="Inserir célula antes"></button></li>';
    table+='<li><button id="testeSel" onclick="removeCell()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configCell-delete.svg" height="40" title="Apagar célula"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><button id="testeSel" onclick="openWindowConfigBackgroundTable()"><img src="'+POSTS_RFF_DIR_EDITOR+'imgEditor/configTable.svg" height="40" title="Configurar tabela"></button></li>';
    table+='</ul>';
    table+='<button onclick="fecharJanTab(this)" draggable="false" droppable="false">X</button>';
    table+='</div>';
    table += '<table cellspacing="0" class="tabela" id="tabelaInserida" onkeydown="keydownTable(event, this)" onkeyup="keyupTable(event, this)">';
    for(i=0; i<=numRow; i++){
        table+='<tr contenteditable="false" spellcheck="false">';
        // table+='<tr contenteditable="false" spellcheck="false">';
        if(i==0){
            for(j=0;j<=numCol;j++){
                if(j==0){
                    table+='<td style="" contenteditable="false" spellcheck="false" id="tableTdInicialPoint"></td>';
                }else{
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialLarg" style=""></td>';
                }
            }
        }else{
            for(j=0;j<=numCol;j++){
                if(j==0){
                    // table+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                }else{
                    table+='<td style="" contenteditable="true" spellcheck="true" onclick="actionClickTd(this)" class="">&nbsp;</td>';
                    // table+='<td contenteditable="true" spellcheck="true">&nbsp;</td>';
                }
            }
        }
        table+='</tr>';
    }
    table+='</table>';
    divPai.innerHTML=table;
    range.insertNode(divPai);
}




////////////////////////////////
/******* Inserir linha ********/
///////////////////////////////

function insertTrAfter() {
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        let obj = document.createElement('tr');
        obj.setAttribute('contenteditable', 'false');
        obj.setAttribute('spellcheck', 'false');
        var tds = '';

        let rowspan = selecao.getAttribute('rowspan');
        // console.log('Quantidade de linhas: '+rowspan)
        let r = 0;
        if(rowspan != null && rowspan!=0){
            let j = parseInt(rowspan, 10)+1;
            selecao.setAttribute('rowspan', j)
            r=j-2;
        }

        for(let i=0;i<tr.children.length;i++){
            if(i==0){
                // tds+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                tds+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
            }else if(i<=r){
                r=0;
                continue;
            }else{
                tds+='<td contenteditable="true" spellcheck="true" onclick="actionClickTd(this)">&nbsp;</td>';
            }
            
        }
        obj.innerHTML = tds
        tbody.insertBefore(obj, tr.nextElementSibling);
        // console.log('Deu certo')
    }
}

function insertTrBefore() {
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        let obj = document.createElement('tr');
        obj.setAttribute('contenteditable', 'false');
        obj.setAttribute('spellcheck', 'false');
        var tds = '';

        for(let i=0;i<tr.children.length;i++){
            if(i==0){
                // tds+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                tds+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
            }else{
                tds+='<td contenteditable="true" spellcheck="true" onclick="actionClickTd(this)">&nbsp;</td>';
            }
        }
        obj.innerHTML = tds
        tbody.insertBefore(obj, tr);
        // console.log('Deu certo')
    
    }
}




/////////////////////////////////
/******* Inserir coluna ********/
////////////////////////////////

function insertTdBefore() {
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 0;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        let obj = [];
        for(let i=0;i<tbody.children.length;i++){
            let tdnew = document.createElement('td')
            if(i==0){
                tdnew.setAttribute('id', 'tableTdInicialLarg');
            }else{
                tdnew.setAttribute('contenteditable', 'true');
                tdnew.setAttribute('spellcheck', 'true');
                tdnew.setAttribute('onclick', 'actionClickTd(this)');
                tdnew.innerHTML='&nbsp;'
            }
            obj.push(tdnew)
        }
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].insertBefore(obj[i], tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
}

function insertTdAfter() {
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 1;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        let obj = [];
        for(let i=0;i<tbody.children.length;i++){
            let tdnew = document.createElement('td')
            if(i==0){
                tdnew.setAttribute('id', 'tableTdInicialLarg')
            }else{
                tdnew.setAttribute('contenteditable', 'true')
                tdnew.setAttribute('spellcheck', 'true')
                tdnew.setAttribute('onclick', 'actionClickTd(this)');
                tdnew.innerHTML='&nbsp;'
            }
            obj.push(tdnew)
        }
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].insertBefore(obj[i], tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
}


//////////////////////////////////////
/******* Inserir célula ********/
/////////////////////////////////////

function insertCellLeft(){
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tdnew = document.createElement('td')
        tdnew.setAttribute('contenteditable', 'true')
        tdnew.setAttribute('spellcheck', 'true')
        tdnew.setAttribute('onclick', 'actionClickTd(this)');
        tdnew.innerHTML='&nbsp;'
        tr.insertBefore(tdnew, tr.children[(getPositionTD(td)-1)]);
    }
}

function insertCellRight(){
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tdnew = document.createElement('td')
        tdnew.setAttribute('contenteditable', 'true')
        tdnew.setAttribute('spellcheck', 'true')
        tdnew.setAttribute('onclick', 'actionClickTd(this)');
        tdnew.innerHTML='&nbsp;'
        tr.insertBefore(tdnew, tr.children[getPositionTD(td)]);
    }
}

function removeCell(){
    let td = verifyGetTD();
    if(td!=null){
        let tr = td.parentNode;
        let tbody = tr.parentNode;
        let posTD = getPositionTD(td)-1;
        let posTr = getPositionTr(tr);
        // console.log('Remove celular '+posTD)
        if(posTr>0){
            if(posTD>0 && tr.children.length>2){
                tr.removeChild(td);
            }else{
                if(tr.children.length<=2){
                    tbody.removeChild(tr);
                }
            }
            // console.log('Número de celulas na tr: '+tr.children.length)
        }
    }
}



function verifyGetTD(){
    let td = window.getSelection().getRangeAt(0).startContainer;
    for(let i=0; i<15; i++){
        if(td.nodeName=='TD'){
            return td;
        }else if(td.nodeName=='DIV'){
            return null;
        }else{
            td=td.parentNode;
        }
    }
}


//////////////////////////////////////
/******* Mesclagem de célula ********/
/////////////////////////////////////

function merge(tipo, type){
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName);
    // selecao = selecao.parentNode;
    if(selecao.nodeName=='TD'){
        // console.log('entrou no primeiro '+selecao.nodeName)
        if(type=='add'){
            mergeType(tipo, selecao)
        }else{
            unMergeType(tipo, selecao)
        }
    }
}

function mergeType(tipo, td){
    if(tipo=='column'){
        let tr = td.parentNode;
        let tbody = tr.parentNode;
        var conta = getPositionTr(tr);
        let contaTd = getPositionTD(td)-1;
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        if(rowspan!=null && rowspan!=0){
            conta=conta+(rowspan-1);
        }
        if(tbody.children[(conta+1)]!=null){
            // console.log(rowspan+'------')
            if(rowspan!=null && rowspan!=0){
                rowspan = parseInt(rowspan, 10)+1;
                // console.log('***************'+rowspan)
                td.setAttribute('rowspan', rowspan)
            }else{
                td.setAttribute('rowspan', 2)
            }
            if(colspan!=null && colspan != 0){
                conta = conta+1;
                for(let j=0; j<colspan; j++){
                    contaTd=contaTd++;
                    tbody.children[conta].removeChild(tbody.children[conta].children[contaTd]);
                }
            }else{
                tbody.children[(conta+1)].removeChild(tbody.children[(conta+1)].children[contaTd]);
            }
            // console.log(tbody.children[(conta)].children[contaTd])
            // console.log('+++++++++++++++++++++++++')
            // tbody.children[(conta+1)].removeChild(tbody.children[(conta+1)].children[contaTd]);
            // console.log(tbody.children[(conta)].children[contaTd])
        }
    }else if(tipo=='row'){
        let tr = td.parentNode;
        // let tdPrev = td.previousElementSibling;
        // let conta=0;
        // // console.log(tr)
        // // console.log(tdPrev+' anterior')
        // for(let i=0; i<tr.children.length; i++){
        //     if(tdPrev!=null){
        //         conta++;
        //     }else{
        //         break;
        //     }
        //     tdPrev = tdPrev.previousElementSibling;
        // }
        let conta = getPositionTD(td);
        // console.log(conta+' posição ******************************************')
        if(tr.children[(conta)]!=null){
            let colspan = td.getAttribute('colspan');
            let rowspan = td.getAttribute('rowspan');
            // let tdNext = tr.children[(conta+1)].getAttribute('colspan');
            let tdNext = tr.children[(conta)].getAttribute('colspan');
            let tbody = tr.parentNode;
            let posTr = getPositionTr(tr);
            let posTd = getPositionTD(td)-1;
            if(colspan!=null && colspan!=''){
                colspan++;
                // console.log(colspan)
            }else{
                colspan = 2;
            }
            if(tdNext!=null && tdNext!=''){
                for(let j=1; j<tdNext; j++){
                    colspan++;
                }
            }
            td.setAttribute('colspan', colspan)
            if(rowspan!=null && rowspan!=0){
                if(rowspan>2){
                    for(let r=0; r<rowspan; r++){
                        if(r<1){
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[(conta+r)]);
                        }else if(r<2){
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[(conta-r)]);
                        }else{
                            // console.log(tbody.children[posTr+r].children[(conta)])
                            // console.log(conta)
                            tbody.children[posTr+r].removeChild(tbody.children[posTr+r].children[0]);
                        }
                    }
                }else{
                    tbody.children[posTr].removeChild(tbody.children[posTr].children[conta]);
                    tbody.children[posTr+(rowspan-1)].removeChild(tbody.children[posTr+(rowspan-1)].children[conta]);
                }
            }else{
                tr.removeChild(tr.children[conta]); // alterado
            }
        }else{
            // console.log('Não existem td depois do atual')
        }
        
    }
}

function unMergeType(tipo, td){
    if(tipo=='column'){
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        if(rowspan!=null && rowspan!=0){
            let tr = td.parentNode;
            let tbody = tr.parentNode;
            let positTr = getPositionTr(tr);
            let positTd = getPositionTD(td)-1;
            let newTD = document.createElement('td');
            newTD.setAttribute('contenteditable', 'true')
            newTD.setAttribute('spellcheck', 'true')
            newTD.setAttribute('onclick', 'actionClickTd(this)');
            newTD.innerHTML='&nbsp;'
            if(rowspan>2){
                let newRowSpan = rowspan-1;
                td.setAttribute('rowspan', newRowSpan);
                if(colspan!=null && colspan!=0){
                    if(colspan>2){
                        for(let k=0; k<colspan; k++){
                            tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[(positTd+k)]);
                        }
                    }else{
                        tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[positTd]);
                        tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[(positTd+1)]);
                    }
                }else{
                    tbody.children[(positTr+(rowspan-1))].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+(rowspan-1))].children[positTd]);
                }
            }else{
                td.removeAttribute('rowspan');
                if(colspan!=null && colspan!=0){
                    if(colspan>2){
                        for(let k=0; k<colspan; k++){
                            tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[(positTd+k)]);
                        }
                    }else{
                        tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[positTd]);
                        tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[(positTd+1)]);
                    }
                }else{
                    tbody.children[(positTr+1)].insertBefore(newTD.cloneNode(true), tbody.children[(positTr+1)].children[positTd]);
                }
            }
            
        }
        
    }else if(tipo=='row'){
        let colspan = td.getAttribute('colspan');
        let rowspan = td.getAttribute('rowspan');
        // console.log('---> '+colspan)
        if(colspan!=null && colspan!=''){
            let newColSpan=0;
            if(colspan>2){
                newColSpan = colspan-1;
                td.setAttribute('colspan', newColSpan);
            }else{
                td.removeAttribute('colspan');
            }
            // let tdNew = document.createElement('td')
            // let tr = td.parentNode;
            // tr.insertBefore(tdNew, tr.children[getPositionTD(td)]);

            let tdNew = document.createElement('td')
            tdNew.setAttribute('contenteditable', 'true')
            tdNew.setAttribute('spellcheck', 'true')
            tdNew.setAttribute('onclick', 'actionClickTd(this)');
            tdNew.innerHTML = '&nbsp;'
            // let tdNew2 = document.createElement('td')
            let tr = td.parentNode;
            if(rowspan!=null && rowspan!=0){
                let tbody = tr.parentNode;
                let positionTr = getPositionTr(tr);
                if(rowspan>2){
                    for(let p = 0; p<rowspan; p++){
                        // console.log(getPositionTD(td)-p)
                        if(p<2){
                            tbody.children[(positionTr+p)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+p)].children[(getPositionTD(td)-p)]);
                        }else{
                            tbody.children[(positionTr+p)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+p)].children[(getPositionTD(td)-1)]);
                        }
                    }
                }else{
                    tbody.children[positionTr].insertBefore(tdNew.cloneNode(true), tbody.children[positionTr].children[getPositionTD(td)]);
                    tbody.children[(positionTr+1)].insertBefore(tdNew.cloneNode(true), tbody.children[(positionTr+1)].children[(getPositionTD(td)-1)]);
                }
            }else{
                tr.insertBefore(tdNew, tr.children[getPositionTD(td)]);
            }
        }
    }
}


function getNumMaxTDs(tbody){
    //Pega a quantidade padrão de TDs nas TRs (o numero máximo de tds)
    let numTdsPadrao = 0;
    for(let j=0; j<tbody.children.length; j++){
        // console.log('Numero de tds: '+tbody.children[j].children.length)
        if(tbody.children[j].children.length>numTdsPadrao){
            numTdsPadrao = tbody.children[j].children.length;
        }
    }
    // console.log('QUantidade de TDs padrão: '+numTdsPadrao)
    return numTdsPadrao;
}




////////////////////////////////////////////////
/******* Pegar a posição do TR e do TD ********/
///////////////////////////////////////////////

function getPositionTD(td){
    let tr = td.parentNode;
    let tdPrev = td.previousElementSibling;
    let conta=0;
    // console.log(tr)
    // console.log(tdPrev+' anterior')
    for(let i=0; i<tr.children.length; i++){
        if(tdPrev!=null){
            conta++;
        }else{
            break;
        }
        tdPrev = tdPrev.previousElementSibling;
    }
    return ++conta;
}

function getPositionTr(tr){
    let tbody = tr.parentNode;
    let trPrev = tr.previousElementSibling;
    let conta =0;
    for(let i=0; i<tbody.children.length; i++){
        if(trPrev!=null){
            conta++;
        }else{
            break;
        }
        trPrev = trPrev.previousElementSibling;
    }
    return conta;
}



//////////////////////////
/******* Excluir ********/
//////////////////////////


function delTr() {
    var selecao = verifyGetTD();
    // console.log(selecao.nodeName+"------------")
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        tbody.removeChild(tr)
    }
}

function delTd() {
    var selecao = verifyGetTD();
    if(selecao.nodeName=='TD'){
        var tbody = selecao.parentNode.parentNode;
        let tr = selecao.parentNode;
        // console.log(',,,,,,,,,,,,,'+tbody.children[0].children.length)
        let conta = 0;
        let n = selecao.previousElementSibling
        for(let j=0; j<tbody.children[0].children.length; j++){
            if(n!=null){
                conta++;
                // console.log(conta)
            }else{
                break;
            }
            n = n.previousElementSibling
        }
        // console.log('o numero da celula é: '+conta)
        for(let i=0;i<tbody.children.length;i++){
            // console.log(tbody.children[i].children[conta])
            tbody.children[i].removeChild(tbody.children[i].children[conta])
        }
        // console.log('Deu certo')
    }
}




/////////////////////////////////////
/******* Selecionar células ********/
/////////////////////////////////////
var tdSel = [];
var ctrlActive = false;

// function actionClickTd(elem){
//     // console.log("ctrlActive = "+ctrlActive)
//     // console.log(tdSel)
//     if(ctrlActive==true){
//         tdSel.push(elem)
//         console.log('célula selecionada: '+elem.cellIndex)
//         elem.classList.add('selectedCel')
//         // console.log(elem)
//     }else{
//         removeSelectedCel();
//     }
// }


function actionClickTd(elem){
    // console.log("ctrlActive = "+ctrlActive)
    // console.log(tdSel)
    if(ctrlActive==true){
        let igual = false;
        let posi = 0;
        for(let i=0; i<tdSel.length; i++){
            if(tdSel[i]==elem){
                igual=true;
                posi = tdSel.indexOf(elem);
            }
            // console.log(tdSel[i])
        }
        if(igual==true){
            tdSel.splice(posi, 1);
            elem.classList.remove('selectedCel');
        }else{
            tdSel.push(elem)
            // console.log('célula selecionada: '+elem.cellIndex);
            elem.classList.add('selectedCel');
        }
        // console.log(elem)
    }else{
        removeSelectedCel();
    }
}

function keydownTable(event, elem){
    if(event.keyCode==17){
        // console.log(event.keyCode)
        // removeSelectedCel();
        // tdSel=[];
        ctrlActive=true;
        // elem.addEventListener('click', function (e){
        //     console.log(e)
        // })
    }
}

function keyupTable(event, elem){
    if(event.keyCode==17){
        ctrlActive=false;
        // console.log(tdSel)
    }
}

function removeSelectedCel(){
    // console.log('selecionados: '+tdSel.length)
    for(let i=0; i<tdSel.length; i++){
        // console.log(tdSel[i])
        tdSel[i].classList.remove('selectedCel')
    }
    tdSel=[];
}





function selectElementMoveMouse(elem){
    // console.log("ctrlActive = "+ctrlActive)
    // console.log(tdSel)
    if(ctrlActive==true){
        let igual = false;
        let posi = 0;
        for(let i=0; i<tdSel.length; i++){
            if(tdSel[i]==elem){
                igual=true;
                posi = tdSel.indexOf(elem);
            }
            // console.log(tdSel[i])
        }
        if(igual==true){
            // tdSel.splice(posi, 1);
            // elem.classList.remove('selectedCel');
        }else{
            tdSel.push(elem)
            // console.log('célula selecionada: '+elem.cellIndex);
            elem.classList.add('selectedCel');
        }
        // console.log(elem)
    }else{
        removeSelectedCel();
    }
}

function verifyElementFocus(){
    let elem = verifyGetTD();
    if(elem!=null){
        let tr = elem.parentNode;
        let tbody = tr.parentNode;
        //É uma tabela
        let listenerMov = function(event){
            // console.log(event.toElement)
            // ctrlActive=true;
            selectElementMoveMouse(event.toElement)
        }
        tbody.addEventListener('mousedown', function(event){
            // console.log(tags)
            tbody.addEventListener('mousemove', listenerMov, false);
        })
        tbody.addEventListener('mouseup', function(){
            // ctrlActive=false;
            tbody.removeEventListener('mousemove', listenerMov, false)
        })
    }else{
        //Não é uma tabela
    }
}



///////////////////////////////////////////////////////////////
/**************** Configurações de célula ********************/
///////////////////////////////////////////////////////////////


function getWindowBckgroundColorTDsel(){
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+"windowColorBackGroundTD.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

function backGroundColorTdSel(cor){
    if(tdSel.length>0){
        for(let i=0; i<tdSel.length; i++){
            // console.log(cor)
            if(cor=='limpar'){
                tdSel[i].style.backgroundColor=null;
            }else{
                // tdSel[i].style.backgroundColor='#'+cor;
                tdSel[i].style.backgroundColor=cor;
            }
        }
    }
}

function openConfigTdSel(){
    updateDirEditor();
    if(tdSel.length>0){
        let style = tdSel[0].getAttribute('style');
        localStorage.setItem('style', style);
        window.open(POSTS_RFF_DIR_EDITOR+'windowConfigBorderCell.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
    }else{
        alert('Nenhuma célula selecionada! Para selecionar uma célula, segure a tecla CTRL e clique em cima da célula, com isso aparecerá uma cor de seleção nela!')
    }
}

function configBorderTdSel(config){
    if(tdSel.length>0){
        for(let i=0; i<tdSel.length; i++){
            // console.log(config)
            if(config=='limpar'){
                tdSel[i].style.border=null;
            }else{
                // tdSel[i].style.border='3px solid red';
                tdSel[i].style.border=config;
            }
        }
    }
}

function configPaddingTdSel(config){
    if(tdSel.length>0){
        for(let i=0; i<tdSel.length; i++){
            if(config=='limpar'){
                tdSel[i].style.padding = null;
            }else{
                tdSel[i].style.padding = config+'px';
            }
        }
    }
}

function rotateTdSel(config){
    if(tdSel.length>0){
        for(let i=0; i<tdSel.length; i++){
            // console.log(tdSel[i].children[0])
            if(config=='limpar'){
                tdSel[i].style.writingMode=null;
                tdSel[i].style.textOrientation=null;
            }else{
                tdSel[i].style.writingMode='vertical-rl';
                tdSel[i].style.textOrientation='upright';
                // tdSel[i].style.transform='rotate(90deg)';
            }
        }
    }
}

function configBorderTable(border){
    let table = verifyGetNode('TABLE');
    if(table!=null){
        if(border=='limpar'){
            table.style.border=null;
        }else{
            border='2px solid red';
            table.style.border=border;
        }
    }
}

function configBackgroundTable(obj){
    let table = verifyGetNode('TABLE');
    if(table!=null){
        if(obj=='limpar'){
            table.style.background = null;
        }else{
            table.style.background = obj;
            let styleBack = table.getAttribute('style').replace('(\"', '(\'');
            styleBack = styleBack.replace('\")', '\')');
            styleBack = styleBack.replace('left ', 'left+');
            styleBack = styleBack.replace('top ', 'top+');
            // console.log(table.getAttribute('style'));
            // console.log(styleBack);
            table.setAttribute('style', styleBack);
        }
    }
}



function openWindowConfigBackgroundTable(){
    updateDirEditor();
    let table=verifyGetNode('TABLE');
    if(table!=null){
        // let style = table.getAttribute('style');
        // let charStyle = style.split(';');
        // for(let i=0;i<charStyle.length;i++){
        //     let propStyle = charStyle.split(':');
        //     if(propStyle[0]=='background' || propStyle[0]==' background'){
        //         localStorage.setItem('background', propStyle[1]);
        //     }
        // }
        localStorage.setItem('style', table.getAttribute('style'));
        window.open(POSTS_RFF_DIR_EDITOR+'windowConfigTable.php', 'janela', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,height=350,width=500,top=50,left=100,fullscreen=no');
    }else{
        alert('Nenhuma Tabela selecionada! Clique em uma tabela para editar sua propriedade de background!')
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*************************************************** Cria e edita tabela FIM ***************************************************/



function insertVideoOld() {
    selection = window.getSelection().toString();
    var table = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dtLXZEuZbeQ?si=HdSO5bFrWUow5eNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    var video = window.prompt("Insira no campo abaixo o iframe de incorporação do vídeo do youtube", "");
    document.execCommand('insertHTML', false, video);
}

function openWindowInsertVideo(){
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+"windowInsertVideo.php", 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

// function insertVideo(codVideo, si, width, height) {
//     selection = window.getSelection().toString();
//     //var table = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dtLXZEuZbeQ?si=HdSO5bFrWUow5eNl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     // var video = '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     var video = '<div class="item" id="item" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" ondragover="allowDrop2(event)" contenteditable="false">'
//     video += '<div id="tools" draggable="false" droppable="false">'
//     video += '<button onclick="editVideo(this, event)" draggable="false" droppable="false">Editar</button>'
//     // video += '<div id="arrastar" draggable="true" droppable="false" ondragover="allowDrop(event)" contenteditable="false"></div>'
//     // video += '<div id="arrastar" dragstart="dragStart(event)" drag="drag(event)" dragend="dragend(event)" draggable="true" droppable="false" contenteditable="false"></div>'
//     video += '<button onclick="fecharJanVid(this)" draggable="false" droppable="false">X</button>'
//     video += '</div>'
//     video += '<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//     video += '</div>'
//     //var video = window.prompt("Insira no campo abaixo o iframe de incorporação do vídeo do youtube", "");
//     document.execCommand('insertHTML', false, video);
// }

function insertVideo(codVideo, si, width, height) {
    let range = window.getSelection().getRangeAt(0);
    let divPai = document.createElement('div');
    divPai.setAttribute('class', 'item');
    divPai.setAttribute('id', 'item');
    divPai.setAttribute('dragstart', 'dragStart(event)');
    divPai.setAttribute('drag', 'drag(event)');
    divPai.setAttribute('dragend', 'dragend(event)');
    divPai.setAttribute('draggable', 'true');
    divPai.setAttribute('droppable', 'false');
    divPai.setAttribute('ondragover', 'allowDrop2(event)');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('style', 'width:'+width+'; height:'+height+';');
    var video = ''
    video += '<div id="tools" draggable="false" droppable="false">'
    video += '<button onclick="editVideo(this, event, \'img\')" draggable="false" droppable="false">Editar</button>'
    video += '<button onclick="fecharJanVid(this)" draggable="false" droppable="false">X</button>'
    video += '</div>'
    video += '<div id="mediaAndCaption" style="width:100%; height:90%;">'
    video += '<iframe width="100%" height="90%" src="https://www.youtube.com/embed/'+codVideo+'?si='+si+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    video += '</div>'
    divPai.innerHTML = video;
    range.insertNode(divPai)
}




// function insertEmotions(img){
//     if(img != null){
//         var url = img.getAttribute("src");
//         var width = 50;
//         var height = 'auto';
//         document.getElementById("porcento").innerHTML = '<img src="'+url+'" id="previewImage" width="'+width+'" height="'+height+'">';
//         insertImg();
//     }else{
//         console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
//     }
// }


function insertEmotions(img){
    if(img != null){
        let range = window.getSelection().getRangeAt(0);
        var url = img.getAttribute("src");
        var width = 'auto';
        var height = '50';
        let image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('width', width);
        image.setAttribute('height', height);
        image.setAttribute('src', url);
        image.setAttribute('onclick', 'openWindowEditImage(this)');
        image.setAttribute('style', 'margin-bottom: -5px;');
        range.insertNode(image);
    }else{
        // console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }
}





function verifyGetNode(node){
    // if(node=='DIV'){
    //     return null
    // }
    let elem = window.getSelection().getRangeAt(0).startContainer;
    for(let i=0; i<15; i++){
        if(elem.nodeName==node){
            return elem;
        }else if(elem.nodeName=='DIV' && elem.getAttribute('id')=='texto'){
            return null;
        }else{
            elem=elem.parentNode;
        }
    }
}


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
//   alert(hexToRgb("#c2cc9e").r+' - '+hexToRgb("#c2cc9e").g+' - '+hexToRgb("#c2cc9e").b); // "51";








function fecharJanVid(elem){
    let tool = elem.parentNode;
    let jan = tool.parentNode;
    let geral = jan.parentNode;
    geral.removeChild(jan)
    document.getElementById('editVideo').setAttribute('style', 'display:none;')
}






function fecharJanTab(elem){
    let tool = elem.parentNode;
    let jan = tool.parentNode;
    let geral = jan.parentNode;
    geral.removeChild(jan)
    document.getElementById('editVideo').setAttribute('style', 'display:none;')
}




function getSetCaption(){
    // console.log(nodePai.children.length)
    // console.log(parseInt(nodePai.style.height)+' de altura')
    let dvMedia = nodePai.children[1];
    if(dvMedia.children.length>1){
        let caption = dvMedia.children[1];
        // console.log(caption);
        dvMedia.removeChild(caption);
        document.getElementById('addCaption').innerHTML = 'Adicionar caption';
    }else{
        let altura = parseInt(nodePai.style.height);
        let dvCaption = document.createElement('div');
        dvCaption.setAttribute('id', 'captionMedia');
        dvCaption.setAttribute('contenteditable', 'true');
        dvCaption.setAttribute('spellcheck', 'true');
        dvCaption.setAttribute('autocomplete', 'true');
        dvCaption.setAttribute('draggable', 'false');
        dvCaption.setAttribute('droppable', 'false');
        dvCaption.setAttribute('style', `
            cursor: default;
            z-index: 1001;
            border-radius: 0 0 10px 10px;
            border: 1px solid #cdcdcd;
            word-wrap: break-word;
            -ms-word-wrap: break-word;
            word-break: break-all;
            -ms-word-break: break-all;
            padding: 8px 10px;
            background-color: #f7f7f7;
            color: #333;
            font-style: italic;
            font-size: .75em;
            /* font-weight: bold; */
            position: absolute;
            /* min-width: 100% - 20px; */
            width: -webkit-fill-available;
            margin-top: 0px !important;
            text-align: center;
            min-height: 25px;
        `);
        // dvCaption.setAttribute('onclick', 'checkContentCaption(this)');
        dvCaption.classList.add('captionText');
        // dvCaption.style.padding = '3px 10px';
        // dvCaption.style.backgroundColor = '#f7f7f7';
        // dvCaption.style.color = '#333';
        // dvCaption.style.fontStyle = 'italic';
        // dvCaption.style.fontSize = '.75em';
        // dvCaption.style.fontWeight = 'bold';
        // dvCaption.style.position = 'absolute';
        // dvCaption.style.top = altura+'px';
        // dvCaption.style.left = '0px';
        // dvCaption.style.minHeight = '20px';
        // dvCaption.style.width = '100%-20px';
        dvCaption.setAttribute('onkeyup', 'checkContentCaption(this)');
        dvMedia.insertBefore(dvCaption, dvMedia.children[1]);
        document.getElementById('addCaption').innerHTML = 'Remover caption'
    }
}

function checkContentCaption(elem){
    let t = false;
    if(elem.innerHTML!=''){
        if(t==false){
            elem.classList.remove('captionText');
            t=true;
        }
    }else{
        elem.classList.add('captionText');
        t=false;
    }
}




/****** Adicionando o recurso de arrastar a janela de editar Media (editVideo) **************/
var dragMe = document.getElementById("editVideo"),
  /* o x inicial do drag*/
  dragOfX = 0,
  /* o y inicial do drag */
  dragOfY = 0;

/* ao segurar o elemento */
function dragStart1(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;
    
    /* adiciona os eventos */
    dragMe.addEventListener("mousemove", dragMove1);
    dragMe.addEventListener("mouseup", dragEnd1);
}
    
/* ao ser arrastado */
function dragMove1(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY) + 'px';
}
    
/* ao terminar o drag */
function dragEnd1() {
    /* remove os eventos */
    // dragMe.removeEventListener("mousedown", dragStart1);
    dragMe.removeEventListener("mousemove", dragMove1);
    dragMe.removeEventListener("mouseup", dragEnd1);
}
    
/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart1);

function getEventDrag(dvd){
    dragMe.addEventListener("mousedown", dragStart1);
}
function removeDrag() {
    /* remove os eventos */
    dragMe.removeEventListener("mousedown", dragStart1);
    dragMe.removeEventListener("mousemove", dragMove1);
    dragMe.removeEventListener("mouseup", dragEnd1);
}


/****************************************** Adiionar sumario INICIO *****************************************************/



function headingCab(local) {
    // A função anônima define um escopo local 
    // Localiza o elemento contêiner TOC. 
    // Se não existe, cria um no início do documento. 
    var toc = document.getElementById("TOC"); 
    if (!toc) { 
        toc = document.createElement("div"); 
        toc.id = "TOC"; 
        // toc.innerHTML='<h1 id="sumario">Sumario</h1>';
        toc.innerHTML='Sumário';
        local.insertBefore(toc, local.firstChild); 
    } 
    // Localiza todos os elementos de cabeçalho de seção 
    var headings; 
    if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
        headings = local.querySelectorAll("h1,h2,h3,h4,h5,h6"); 
    else // Caso contrário, localiza os cabeçalhos da maneira difícil 
        headings = findHeadings(local, []); 
    // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
    function findHeadings(root, sects) { 
        for(var c = root.firstChild; c != null; c = c.nextSibling) { 
            if (c.nodeType !== 1) continue; 
            if (c.tagName.length == 2 && c.tagName.charAt(0) == "H") 
                sects.push(c); 
            else 
            findHeadings(c, sects); 
        }
        return sects;
    }
    // Inicializa um array que monitora números de seção. 
    var sectionNumbers = [0,0,0,0,0,0]; 
    // Agora itera pelos elementos de cabeçalho de seção que encontramos. 
    for(var h = 0; h < headings.length; h++) { 
        var heading = headings[h]; 
        // Pula o cabeçalho de seção se estiver dentro do contêiner de TOC. 
        if (heading.parentNode == toc) continue; 
        // Descobre de que nível é o cabeçalho. 
        var level = parseInt(heading.tagName.charAt(1)); 
        if (isNaN(level) || level < 1 || level > 6) continue; 
        // Incrementa o número de seção para esse nível de cabeçalho 
        // e zera todos os números de nível de cabeçalho inferiores. 
        sectionNumbers[level-1]++; 
        for(var i = level; i < 6; i++) 
            sectionNumbers[i] = 0; 
        // Agora combina os números de seção de todos os níveis de cabeçalho 
        // para produzir um número de seção como 2.3.1. 
        var sectionNumber = sectionNumbers.slice(0,level).join(".") 
        // Adiciona o número de seção no título do cabeçalho de seção. 
        // Colocamos o número em um <span> para que possa ser estilizado. 
        // var span = document.createElement("span"); 
        // span.className = "TOCSectNum"; 
        // span.innerHTML = sectionNumber;
        // heading.insertBefore(span, heading.firstChild); 

        // Encerra o cabeçalho em uma âncora nomeada para que possamos nos vincular a ele. 
        var anchor = document.createElement("a"); 
        anchor.name = "TOC"+sectionNumber; 
        heading.parentNode.insertBefore(anchor, heading); 
        anchor.appendChild(heading); 
        // Agora cria um link para essa seção. 
        var link = document.createElement("a"); 
        link.href = "#TOC" + sectionNumber; 
        // Destino do link 
        link.innerHTML = sectionNumber+' - '+heading.innerHTML; 
        // O texto do link é o mesmo do cabeçalho 
        // Coloca o link em um div que pode ser estilizado de acordo com o nível. 
        var entry = document.createElement("div"); 
        entry.className = "TOCEntry TOCLevel" + level; 
        entry.appendChild(link); 
        // E adiciona o div no contêiner de TOC. 
        toc.appendChild(entry); 
    }
}
// headingCab(document.getElementById("texto"));


function setOrRemoveHeading(){
    let texto = document.getElementById("texto");
    if(document.getElementById('TOC')==null){
        headingCab(document.getElementById("texto"));
        document.getElementById('sumario').style.backgroundColor='green';
    }else{
        // texto.removeChild(document.getElementById('TOC'));
        document.getElementById('sumario').style.backgroundColor=null;
        deleteHeadingCab(texto);
    }
    
}


function deleteHeadingCab(local) {
    // A função anônima define um escopo local 
    // Localiza o elemento contêiner TOC. 
    // Se não existe, cria um no início do documento. 
    var toc = document.getElementById("TOC"); 
    if (!toc) { 
        exit
    } 
    // Localiza todos os elementos de cabeçalho de seção 
    var headings; 
    if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
        headings = local.querySelectorAll("h1,h2,h3,h4,h5,h6"); 
    else // Caso contrário, localiza os cabeçalhos da maneira difícil 
        headings = findHeadings(local, []); 
    // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
    function findHeadings(root, sects) { 
        for(var c = root.firstChild; c != null; c = c.nextSibling) { 
            if (c.nodeType !== 1) continue; 
            if (c.tagName.length == 2 && c.tagName.charAt(0) == "H") 
                sects.push(c); 
            else 
            findHeadings(c, sects); 
        }
        return sects;
    }
    // Inicializa um array que monitora números de seção. 
    // var sectionNumbers = [0,0,0,0,0,0]; 
    
    for(var h = 0; h < headings.length; h++) { 
        var heading = headings[h]; 
        // console.log(heading.parentNode.nodeName)
        if(heading.parentNode.nodeName=='A'){
            let tagA = heading.parentNode;
            let geral = tagA.parentNode;
            geral.insertBefore(heading, tagA);
            geral.removeChild(tagA);
            // console.log(heading)
            // console.log(tagA)
        }

    }
    local.removeChild(toc);
}


// marca o botão do sumário se o conteúdo tiver um sumário
function selectBtSumario(){
    if(document.getElementById("TOC")!=null){
        document.getElementById('sumario').style.backgroundColor='green';
    }
}

/****************************************** Adiionar sumario FIM *****************************************************/


function insertBreakPage(){
    let node = verifyGetNode('DIV');
    console.log(node)
    let breakPage = document.createElement('div');
    // breakPage.setAttribute('class', 'item');
    // breakPage.setAttribute('id', 'item');
    breakPage.setAttribute('id', 'breakPage');
    breakPage.setAttribute('dragstart', 'dragStart(event)');
    breakPage.setAttribute('drag', 'drag(event)');
    breakPage.setAttribute('dragend', 'dragend(event)');
    breakPage.setAttribute('draggable', 'true');
    breakPage.setAttribute('droppable', 'true');
    breakPage.setAttribute('ondragover', 'allowDrop2(event)');
    breakPage.setAttribute('contenteditable', 'false');
    breakPage.setAttribute('title', 'Clique e arrasta para mover');
    breakPage.setAttribute('style', `
        page-break-inside: auto;
        page-break-before: always;
    `);
    breakPage.classList.add('classBreakPage');
    // breakPage.innerHTML = '<div id="viewRefBreakPage" draggable="false" droppable="false">';
    // breakPage.innerHTML+='<div id="textoBreakPageUp" draggable="false" droppable="false">Quebra de página</div><hr class="viewLineBreak" draggable="false" droppable="false">';
    // breakPage.innerHTML+='Quebra de Linha';
    // breakPage.innerHTML+='</div>';
    node.insertBefore(breakPage, node.firstChild);
}



// function runImgReturnCanvas(local) {
//     // Localiza todos os elementos de cabeçalho de seção 
//     var headings; 
//     console.log('ldkhbvljdabvhdbalhv')
//     if (local.querySelectorAll) // Podemos fazer isso do modo fácil? 
//         headings = local.querySelectorAll("img"); 
//     else // Caso contrário, localiza os cabeçalhos da maneira difícil 
//         headings = findHeadings(local, []); 
//     // Percorre o corpo do documento recursivamente, procurando cabeçalhos 
//     function findHeadings(root, sects) { 
//         for(var c = root.firstChild; c != null; c = c.nextSibling) { 
//             if (c.nodeType !== 1) continue; 
//             if (c.tagName.length == 3 && c.tagName == "IMG") 
//                 sects.push(c); 
//             else 
//             findHeadings(c, sects); 
//         }
//         return sects;
//     }
//     console.log(headings)
//     for(var h = 0; h < headings.length; h++) { 
//         var heading = headings[h]; 
        
//         let img = document.createElement('img');
//         img.href = getImgDownload(heading);
//         heading.parentNode.insertBefore(img, heading); 
//         heading.parentNode.removeChild(heading);

//         // // Encerra o cabeçalho em uma âncora nomeada para que possamos nos vincular a ele. 
//         // var anchor = document.createElement("a"); 
//         // anchor.name = "TOC"+sectionNumber; 
//         // heading.parentNode.insertBefore(anchor, heading); 
//         // anchor.appendChild(heading); 
//         // // Agora cria um link para essa seção. 
//         // var link = document.createElement("a"); 
//         // link.href = "#TOC" + sectionNumber; 
//         // // Destino do link 
//         // link.innerHTML = sectionNumber+' - '+heading.innerHTML; 
//         // // O texto do link é o mesmo do cabeçalho 
//         // // Coloca o link em um div que pode ser estilizado de acordo com o nível. 
//         // var entry = document.createElement("div"); 
//         // entry.className = "TOCEntry TOCLevel" + level; 
//         // entry.appendChild(link); 
//         // // E adiciona o div no contêiner de TOC. 
//         // toc.appendChild(entry); 
//     }
//     console.log(local)
// }



// function getImgDownload(img){
//     // take any image
//     // let img = img;

//     // make <canvas> of the same size
//     let canvas = document.createElement('canvas');
//     canvas.width = img.clientWidth+500;
//     canvas.height = img.clientHeight+500;

//     let context = canvas.getContext('2d');

//     // copy image to it (this method allows to cut image)
//     context.drawImage(img, 0, 0);
//     // we can context.rotate(), and do many other things on canvas

//     // toBlob is async operation, callback is called when done
//     canvas.toBlob(function(blob) {
//         console.log(URL.createObjectURL(blob))
//     // blob ready, download it
//     let link = document.createElement('a');
//     link.download = 'example.docx';

//     link.href = URL.createObjectURL(blob);
//     link.click();

//     // // delete the internal blob reference, to let the browser clear memory from it
//     URL.revokeObjectURL(link.href);
//         return link.href;
//     }, 'image/png');
// }


// window.addEventListener('load', function(){
//     runImgReturnCanvas(document.getElementById('texto'));
// })

function pasteContentOfWeb(conteudo){
    let range = verifyGetNode('DIV');
    let pai = range.parentNode;
    // console.log(pai)
    console.log(conteudo)
    let position = range;
        alterLineHeight(conteudo);
    for(var c = 0; c < conteudo.children.length; c++){
        // console.log(c)
        let div = document.createElement('div');
        if(conteudo.children[c].nodeName=='DIV'){
            pai.insertBefore(conteudo.children[c].cloneNode(true), range);
        }else if(conteudo.children[c].nodeName=='P'){
            // console.log(conteudo.children[c].cloneNode(true))
            let tag = convertPToDiv(conteudo.children[c].cloneNode(true));
            // div.appendChild(tag);
            pai.insertBefore(tag, range);
        }else if(conteudo.children[c].nodeName=='TABLE'){
            console.log(conteudo.children[c].cloneNode(true))
            let tag = convertTable(conteudo.children[c].cloneNode(true));
            pai.insertBefore(tag, range);
        }else{
            div.appendChild(conteudo.children[c].cloneNode(true));
            pai.insertBefore(div, range);
        }
        position = conteudo.children[c].cloneNode(true);
        // console.log(position)
    }
}

function alterLineHeight(content){
    // console.log(content.firstChild.nodeName)
    for(var c = content.firstChild; c != null; c = c.nextSibling){
        // console.log('**********************')
        // console.log(c)
        if(c.nodeName != '#text' && c.nodeName != 'H1' && c.nodeName != 'H2' && c.nodeName != 'H3' && c.nodeName != 'H4' && c.nodeName != 'H5' && c.nodeName != 'H6'){
            // console.log('Entrou aqui')
            // console.log(c.nodeName)
            c.style.lineHeight = '1rem';
            alterLineHeight(c);
        }else if(c.nodeName != 'H1' && c.nodeName != 'H2' && c.nodeName != 'H3' && c.nodeName != 'H4' && c.nodeName != 'H5' && c.nodeName != 'H6'){
            // c.setAttribute('style', 'color:black;')
        }
    }
}

function openPasteContentOfWeb(){
    updateDirEditor();
    window.open(POSTS_RFF_DIR_EDITOR+'windowPasteContentOfWeb.php', 'janela', 'height=550, width=500, top=50, left=100, scrollbar=no, fullscreen=no');
}

function convertPToDiv(tag){
    if(tag.nodeName=='P'){
        let div = document.createElement('div');
        div.setAttribute('style', tag.getAttribute('style'));
        div.style.lineHeight = '1rem';
        div.innerHTML = tag.innerHTML;
        return div;
    }
    return tag;
}
let p = document.createElement('p');
p.setAttribute('style', 'color:red;')
p.innerHTML = 'Exemplo'
console.log(convertPToDiv(p));

function convertTable(table){
    if(table.nodeName=='TABLE'){
        console.log(table)
        return convertTableNew(table);
    }
    return table;
}



function convertTableNew(tableOri) {
    let tbody = tableOri.children[1];
    console.log(tableOri)
    console.log(tbody)
    // numRow = table.children.length;
    // numCol = table.children[0].length;
    // let range = window.getSelection().getRangeAt(0);
    // selection = window.getSelection().toString();
    let divPai = document.createElement('div');
    divPai.setAttribute('contenteditable', 'false');
    divPai.setAttribute('spellcheck', 'false');
    divPai.setAttribute('class', 'tabelaObj');
    var table ='<div class="configTable" contenteditable="false" spellcheck="false">'
    // table+='<button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-celula.svg" width="50" title="Opções de mesclagem"></button>';
    table+='<ul id="menuTable">';
    table+='<li><img src="rffeditor/imgEditor/mesclar-celula.svg" height="40" title="Opções de mesclagem">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'add\')"><img src="rffeditor/imgEditor/mesclar-lado.svg" height="40" title="Mesclar célula a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'add\')"><img src="rffeditor/imgEditor/mesclar-abaixo.svg" height="40" title="Mesclar célula abaixo"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'row\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-lado.svg" height="40" title="Remove mesclagem a direita"></button></li>';
    table+='<li><button id="testeSel" onclick="merge(\'column\', \'remove\')"><img src="rffeditor/imgEditor/mesclar-remover-abaixo.svg" height="40" title="Remover mesclagem abaixo"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configRow.svg" height="40" title="Configuração de linha">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTrAfter()"><img src="rffeditor/imgEditor/inserttableRowAfter.svg" height="40" title="Inserir linha depois"></li>';
    table+='<li><button id="testeSel" onclick="insertTrBefore()"><img src="rffeditor/imgEditor/inserttableRowBefore.svg" height="40" title="Inserir linha antes"></li>';
    table+='<li><button id="testeSel" onclick="delTr()"><img src="rffeditor/imgEditor/deleteTableRowAfter.svg" height="40" title="Apagar linha"></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configColumn.svg" height="40" title="Configuração de coluna">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="insertTdAfter()"><img src="rffeditor/imgEditor/inserttableColumnAfter.svg" height="40" title="Inserir coluna depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertTdBefore()"><img src="rffeditor/imgEditor/inserttableColumnBefore.svg" height="40" title="Inserir coluna antes"></button></li>';
    table+='<li><button id="testeSel" onclick="delTd()"><img src="rffeditor/imgEditor/deleteTableColumn.svg" height="40" title="Apagar coluna"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><img src="rffeditor/imgEditor/configCell.svg" height="40" title="Configurar célula">';
    table+='<ul>';
    table+='<li><button id="testeSel" onclick="openConfigTdSel()"><img src="rffeditor/imgEditor/configCell-prop.svg" height="40" title="Configurar propriedade da célula"></button></li>';

    table+='<li><button id="testeSel" onclick="insertCellRight()"><img src="rffeditor/imgEditor/configCell-insert-after.svg" height="40" title="Inserir célula depois"></button></li>';
    table+='<li><button id="testeSel" onclick="insertCellLeft()"><img src="rffeditor/imgEditor/configCell-insert-before.svg" height="40" title="Inserir célula antes"></button></li>';
    table+='<li><button id="testeSel" onclick="removeCell()"><img src="rffeditor/imgEditor/configCell-delete.svg" height="40" title="Apagar célula"></button></li>';
    table+='</ul>';
    table+='</li>';

    table+='<li><button id="testeSel" onclick="openWindowConfigBackgroundTable()"><img src="rffeditor/imgEditor/configTable.svg" height="40" title="Configurar tabela"></button></li>';
    table+='</ul>';
    table+='<button onclick="fecharJanTab(this)" draggable="false" droppable="false">X</button>';
    table+='</div>';
    table += '<table cellspacing="0" class="tabela" id="tabelaInserida" onkeydown="keydownTable(event, this)" onkeyup="keyupTable(event, this)">';

    for(var i=0; i<=tbody.children.length; i++){
        table+='<tr contenteditable="false" spellcheck="false">';
        if(i==0){
            for(j=0;j<=returnNumCols(tbody);j++){
                if(j==0){
                    table+='<td style="" contenteditable="false" spellcheck="false" id="tableTdInicialPoint"></td>';
                }else{
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialLarg" style=""></td>';
                }
            }
        }else{
            console.log(i)
            console.log(tbody.children[(i-1)])
            for(j=0;j<=tbody.children[(i-1)].children.length;j++){
                if(j==0){
                    // table+='<td style="'+styleFirstColumn+'" contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                    table+='<td contenteditable="false" spellcheck="false" id="tableTdInicialSmall"></td>';
                }else{
                    table+='<td '+checkAndReturnConfigTD(tbody.children[(i-1)].children[(j-1)])+' contenteditable="true" spellcheck="true" onclick="actionClickTd(this)" class="">'+tbody.children[(i-1)].children[(j-1)].innerHTML+'</td>';
                    // table+='<td contenteditable="true" spellcheck="true">&nbsp;</td>';
                }
            }
        }
        table+='</tr>';
    }
    table+='</table>';
    divPai.innerHTML=table;
    return divPai;
}

function returnNumCols(table){
    let num=0;
    for(let i=0; i<table.children.length; i++){
        if(num < table.children[i].children.length){
            num = table.children[i].children.length;
        }
    }
    return num;
}

function checkAndReturnConfigTD(td){
    let config = ' ';
    if(td.getAttribute('colspan')!=null && td.getAttribute('colspan') != undefined){
        config += 'colspan="'+td.getAttribute('colspan')+'" ';
    }
    if(td.getAttribute('rowspan')!=null && td.getAttribute('rowspan') != undefined){
        config += 'rowspan="'+td.getAttribute('rowspan')+'" ';
    }
    // if(td.getAttribute('width')!=null && td.getAttribute('width') != undefined){
    //     config += 'width="'+td.getAttribute('width')+'" ';
    // }
    // if(td.getAttribute('height')!=null && td.getAttribute('height') != undefined){
    //     config += 'height="'+td.getAttribute('height')+'" ';
    // }
    if(td.getAttribute('style')!=null && td.getAttribute('style') != undefined){
        config += 'style="'+td.getAttribute('style')+'" ';
    }
    return config;
}