const commentForm = document.getElementById('commentForm');
        const commentSection = document.getElementById('commentSection');

        // Agregar evento de envío de formulario
        commentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;

            // Crear un objeto para representar el comentario
            const newComment = {
                name: name,
                comment: comment
            };

            // Obtener los comentarios almacenados en el localStorage
            let comments = JSON.parse(localStorage.getItem('comments')) || [];

            // Agregar el nuevo comentario al array
            comments.push(newComment);

            // Guardar los comentarios actualizados en el localStorage
            localStorage.setItem('comments', JSON.stringify(comments));

            // Mostrar los comentarios
            showComments();
        });

        // Función para mostrar los comentarios
        function showComments() {
            commentSection.innerHTML = '';
            const comments = JSON.parse(localStorage.getItem('comments')) || [];

            comments.forEach(comment => {
                const card = document.createElement('div');
                card.classList.add('card', 'bg-light', 'mb-2');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = comment.name;

                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = comment.comment;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('btn', 'btn-danger', 'mt-2');
                deleteButton.textContent = 'Borrar';
                deleteButton.addEventListener('click', function () {
                    // Eliminar el comentario del array y actualizar el localStorage
                    const index = comments.indexOf(comment);
                    comments.splice(index, 1);
                    localStorage.setItem('comments', JSON.stringify(comments));
                    showComments();
                });

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(deleteButton);
                card.appendChild(cardBody);
                commentSection.appendChild(card);
            });
        }

        // Mostrar comentarios al cargar la página
        showComments();
    