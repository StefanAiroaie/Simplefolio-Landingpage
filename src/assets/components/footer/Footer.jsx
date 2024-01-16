const Footer = () => {
    const curentDate = new Date()
    return (
        <>
            <p className="footer">Copyright Stefan Airoaie {curentDate.getUTCFullYear()}</p>

        </>);
}

export default Footer;