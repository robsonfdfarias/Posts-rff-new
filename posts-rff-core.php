<?php

if(!defined('WPINC')){
    die();
}


function add_menu_admin_page(){
    add_menu_page(
        "Posts Rff",
        "Posts Rff",
        "manage_options",
        "Posts Rff",
        "posts_rff",
        "dashicons-menu",
        7,
    );
}

add_action('admin_menu', 'add_menu_admin_page');

$url_rff_dir_editor = POSTS_RFF_DIR_EDITOR;

function posts_rff(){
    ?>
    <div id="wrap">
        <div class="tab">
            <div id="btView" class="btTab">Visualizar</div>
            <div id="btInsert" class="btTab">Inserir novo</div>
        </div>
        <div id="content">
            <div id="divView">
                <h1>Você está na view</h1>
            </div>
            <div id="divNew">
                <h1>Você está na new</h1>
                <?php
                    include_once(POSTS_RFF_DIR_EDITOR."editText2.php");
                ?>
                <!-- <form action="" method="post" id="formulario"  enctype="multipart/form-data" autocomplete="on" onsubmit="return ValidateContactForm();"> -->
                <form action="" method="post" id="formulario">
                    <input type="text" id="titulo" name="titulo" placeholder="Insira o título do artigo" required spellcheck="true">
                    <select name="post_status" id="post_status">
                        <option value="publish">O post é publicado e visível ao público.</option>
                        <option value="draft">O post está salvo como um rascunho e não está visível ao público.</option>
                        <option value="pending">O post está aguardando revisão.</option>
                        <option value="private">O post está visível apenas para usuários com permissões adequadas.</option>
                    </select>
                    <select name="post_type" id="post_type">
                        <option value="post">Um post de blog padrão.</option>
                        <option value="page">Uma página estática.</option>
                        <option value="attachment">Um arquivo anexado (como uma imagem).</option>
                        <option value="revision">Uma revisão do post.</option>
                        <option value="custom_post_type">Tipos de post personalizados definidos por plugins ou temas.</option>
                    </select>
                    <textarea name="conteudo" id="conteudo" cols="30" rows="10" style="display:none;" required></textarea>
                    <input type="submit" id="enviar">
                </form>
                <span id="urlRff"><?php echo POSTS_RFF_URL_EDITOR; ?></span>
                <span id="dirRff"><?php echo POSTS_RFF_DIR_EDITOR; ?></span>
            </div>
            <div id="divUpdate">
                <h1>Você está na update</h1>
            </div>
            <script>
                localStorage.setItem("POSTS_RFF_URL_EDITOR", document.getElementById('urlRff').innerHTML);
                localStorage.setItem("POSTS_RFF_DIR_EDITOR", document.getElementById('dirRff').innerHTML);
                // alert(localStorage.getItem("POSTS_RFF_DIR_EDITOR"))

                var enviar = document.getElementById("enviar");
                enviar.addEventListener("click", function(){
                    insertTextoEmTextarea();
                })
                async function insertTextoEmTextarea(){
                    var campoTexto = document.getElementById("texto").innerHTML;
                    document.getElementById("texto").innerHTML = '<div>Digite o seu artigo aqui...</div>';
                    console.log(campoTexto)
                    var conteudo = document.getElementById("conteudo");
                    conteudo.innerHTML = campoTexto;
                }

                async function ValidateContactForm(){
                    await insertTextoEmTextarea();
                    var titulo = document.getElementById("titulo");
                    var conteudo = document.getElementById("conteudo");
                    if(!empty(titulo)){
                        alert("O campo titulo não pode ficar em branco!");
                        return false;
                    }else if(conteudo.value==''){
                        alert("O campo conteudo não pode ficar em branco!");
                        return false;
                    }
                }
            </script>
        </div>
    </div>
    <?php
    if(isset($_POST['titulo']) && isset($_POST['conteudo'])){
        $current_user_id = get_current_user_id();
        // echo '<br>'.$current_user_id.'++++++++++++';
        $post_data = array(
            'post_title'    => $_POST['titulo'],
            'post_content'  => $_POST['conteudo'],
            'post_status'   => $_POST['post_status'],
            'post_author'   => $current_user_id,
            'post_type'     => $_POST['post_type'],
        );
        
        $post_id = wp_insert_post($post_data);
    }
}
