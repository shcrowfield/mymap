import { useState } from "react"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./Registration.css"

function Registration() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [phone, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Magyarország');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');
    const [active] = useState(true);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = { identifier, password, firstname, lastname, phone, email, address:{ country, city, street, postcode}, active };
        setIsPending(true);
        console.log(reg);

       /* fetch('api/admin/products/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));*/


fetch('api/admin/customers/', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(reg)

 })
 .then(response => response.json())
 .then(data => console.log(data));



    }

    return (
        <div><Navbar /><Header />
            <div className="regContainer">
                <div>
                    <span className="label">Bejelentkezés</span>
                    <form className="login">
                        <label>Felhasználónév: </label>
                        <input type="text" name="username" />
                        <label>Jelszó: </label>
                        <input type="password" name="password" />

                        <button className="btn">Bejelentkezés</button>
                    </form>
                    <hr />
                    <form className="registration" onSubmit={handleSubmit}>
                        <span className="label">Regisztráció</span>
                        <label>Felhasználónév:</label>
                        <input
                            type="text"
                            required
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            name="username" />
                        <label>Jelszó: </label>
                        <input type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" />
                        <label>Keresztnév: </label>
                        <input type="text"
                            required
                            value={firstname}
                            onChange={(e) => setFname(e.target.value)}
                            name="fname" />
                        <label>Vezetéknév:</label>
                        <input type="text"
                            required
                            value={lastname}
                            onChange={(e) => setLname(e.target.value)}
                            name="lname" />
                        <label>Telefonszám:</label>
                        <input type="tel"
                            required
                            value={phone}
                            onChange={(e) => setTel(e.target.value)}
                            name="phone" />
                        <label>Email:</label>
                        <input type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" />
                        <label>Ország: </label>
                        <input type="text"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            name="country" />
                        <label>Város: </label>
                        <input type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            name="city" />
                        <label>Utca:</label>
                        <input type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                            required
                            name="street" />
                        <label>Irányítószám: </label>
                        <input type="text"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            required
                            name="postcode" />

                        {!isPending && <button className="btn">Regisztráció</button>}
                        {isPending && <button disabled className="btn">Regisztráció....</button>}


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration