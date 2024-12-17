import React from 'react'

  
const Contact = React.forwardRef((props, ref) => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a0666b2d-8fc5-434b-b28b-01fcea576d73");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
return(
<div ref={ref} class=" relative min-h-screen flex items-center justify-center bg-black text-white px-4">
<span className="absolute right-1 w-72 h-72 md:w-96 md:h-96 bg-red-500 rounded-full blur-300"></span>
  <div class="w-full max-w-lg p-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
    <h2 class="text-3xl font-bold text-white mb-6">Let's Talk</h2>
    <p class="text-gray-400 mb-6">Have an idea or need help? Drop me a message, and I'll get back to you!</p>
    
    
    <form onSubmit={onSubmit} class="space-y-4">
      
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name='name'
          placeholder="Your Name"
          required
          class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      
     
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name='email'
          placeholder="Enter your email"
          required
          class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <span className="absolute left-1 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full blur-300"></span>
      
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
        <textarea 
          id="message"
          name='message' 
          rows="4" 
          placeholder="Enter your message"
          required
          class="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
        ></textarea>
      </div>
    
      
      <div>
        <button 
          type="submit" 
          class="w-full py-3 text-lg font-semibold bg-red-400 rounded-xl hover:bg-white hover:text-gray-950 transition ease-out duration-500 "
        >
          Send Message
        </button>
      </div>
    </form>
    
  </div>
</div>
)
});

export default Contact