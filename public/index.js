const button = document.getElementById('button')
console.log(button)
button.addEventListener('click', () => {
    fetch('http://localhost:3000/stripe-demo', {
        method:'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({id: 1, item: 'item'})
    }).then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
    })