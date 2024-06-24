
const defaultImage = 'https://via.placeholder.com/32x32.png';

const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)"
}


// controllo sull'immagine
function getImageOrDefaultURL(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl;
    }
    catch {
        return defaultImage;
    }
}


export default function Sidebar({ user: { id, name, image = defaultImage } }) {

    return (
        <div className="col-3 p-3 bg-light vh-100 overflow-scroll" style={customStyle}>
            <img src={getImageOrDefaultURL(image)} width="32" />
            Benvenuta {name}! Il tuo id è il numero {id}.
        </div>
    );
}