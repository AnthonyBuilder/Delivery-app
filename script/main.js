

// Obtem todas as tuplas do servidor
function getPedidos() {

    firebase.database().ref('users').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function (childSnapshot) {
                let childKey = childSnapshot.key;
                let childData = childSnapshot.val();
                
                content += '<div id="div_pai" class="pmd-card pmd-card-inverse pmd-z-depth-1 shadow-demo"><!-- Card header --><div class="pmd-card-title"><div class="media-left"><a  href="javascript:void(0);" class="avatar-list-img"><img id="perfil" width="60" height="60" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIuodNQdHtwNyNo6Gkg_FhJ4wHeTSBbNJShgwHiWlvnd5wxiI"></a></div><div class="media-body media-middle"><h3 id="nome" class="pmd-card-title-text">'
                            + childData.username + 
                            '</h3><span class="pmd-card-subtitle-text">Estrada ulisses guimaraes - 1992</span></div></div><div class="pmd-card-title"><h2 class="pmd-card-title-text">Sofisticado</h2><span class="pmd-card-subtitle-text">Bolo de chocolate com chá</span><div><!-- Card body --><div class="pmd-card-body">Está esperando a: 5 minutos</div><!-- Card action --><div class="pmd-card-actions"><button type="button" onclick="getPedidos()" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-primary"><i class="material-icons pmd-sm">local_shipping</i></button><button type="button" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-success"><i class="material-icons pmd-sm">thumb_up</i></button><button type="button" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect btn-warning"><i class="material-icons pmd-sm">drafts</i></button></div>';


            });

            $('#row').append(content); 
            console.log(content);
        }
    });
} 

getPedidos();
/*
funcao para cadastrar um novo usuario na base de dados

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username : name,
        email : email
    });
}
*/