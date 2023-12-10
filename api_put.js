function Valaszt(){
    const postId = document.getElementById('postId').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
          const table = document.getElementById('postTable');
          table.innerHTML = `
            <tr>
              <th>ID</th>
              <th>Cím</th>
              <th>Tartalom</th>
              <th>Felhasználó ID</th>
            </tr>
            <tr>
              <td>${post.id}</td>
              <td>${post.title}</td>
              <td>${post.body}</td>
              <td>${post.userId}</td>
            </tr>
          `;

          document.getElementById('title').value = post.title;
          document.getElementById('body').value = post.body;
          document.getElementById('userId').value = post.userId;
        })
        .catch(error => console.error('Hiba történt:', error));
    }

    function updatePost() {
        const postId = document.getElementById('postId').value;
        const title = document.getElementById('title').value;
        const body = document.getElementById('body').value;
        const userId = document.getElementById('userId').value;
  
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
          })
        })
        .then(response => response.json())
        .then(data => console.log('Sikeres módosítás:', data))
        .catch(error => console.error('Hiba történt:', error));
    }
