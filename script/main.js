
// Obtem todas as tuplas do servidor
function getPedidos() {

    firebase.database().ref('pedidos').once('value', function(snapshot){
        snapshot.forEach(function (childSnapshot) {
            let childKey = childSnapshot.key;
            let childData = childSnapshot.val();

            

        });
    });
} 

/*
funcao para cadastrar um novo usuario na base de dados

function writeUserData(userId, name, email) {
    firebase.database().ref('users/' + userId).set({
        username : name,
        email : email
    });
}
*/