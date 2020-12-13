/*******************/
/****  IMPORTS  ****/
/*******************/
import Express from 'express';
/*******************/
/*******************/

const router = Express.Router({ caseSensitive: true });

router.post('/contact-us', async (req, res) => {
    try {
        const title = 'Contact Us';
        const { name, email, message } = req.body;
        const source = fs.readFileSync(path.join(__dirname, './contact-us.hbs'), 'utf8');
        const templateContactUs = handlebars.compile(source);
        const data = { title, name, email, message };
        const templateContactUscompiled = templateContactUs(data);
        await sendMail(`Brandify - ${ title }`, templateContactUscompiled);
        return res.send({ done: true });
    } catch(error) {
        res.send({ error });
    }
});

router.post('/buy-now', async (req, res) => {
    try {
        const title = 'Buy Now';
        const { name, address, email, message, services, socialMediaOptions, socialMediaServices } = req.body;
        const source = fs.readFileSync(path.join(__dirname, './buy-now.hbs'), 'utf8');
        const templateBuyNow = handlebars.compile(source);
        const data = { title, name, address, email, message, services, socialMediaOptions, socialMediaServices };
        const templateBuyNowcompiled = templateBuyNow(data);
        await sendMail(`Brandify - ${ title }`, templateBuyNowcompiled);
        console.log('buy-now');
        return res.send({ done: true });
    } catch(error) {
        res.send({ error });
    }
});

export default router;
