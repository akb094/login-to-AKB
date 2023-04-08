
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwT2NLWuPbCch_eI_jNRnsBqtdj8NKwXRvcOgHvMYb032EiLQBtI8sJal_jpSnD8yxf/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We will get back to You Soon..."))
                .catch(error => console.error('Error!', error.message))
            }
            )