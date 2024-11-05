const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
  const formData = new FormData(e.target);
  const newUser = Object.fromEntries(formData.entries());
  addUser(newUser);
e.target.reset();
};
  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">İsim</label>
      <input
      id="name"
      type="text"
      name="name"
      className="form-control"
      placeholder="ör:Mustafa" />
      </div>

      <div className="my-4">   <label htmlFor="mail">Email</label>
      <input
      id="mail"
      type="email"
      name="mail"
      className="form-control"
      placeholder="ör:Mustafa@business.com" />
       </div>

      <div className="my-4">    <label htmlFor="age">Yaş</label>
      <input
      id="age"
      type="number"
      name="age"
      className="form-control"
      placeholder="ör:21" />
      </div>
      <button>Kullanıcı Ekle</button>
    </form>
  );
};

export default Form;
