import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact</h2>
            <form>
                <label>Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>Message</label>
                <textarea></textarea>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
