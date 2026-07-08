import MenuBookIcon from '@mui/icons-material/MenuBook';
import '../styles/EbookLogo.scss';

type EbookProps = {
 name:string
}
export const EbookLogo = ({name}:EbookProps) => {
    return (
        <div className="logo">
            <MenuBookIcon fontSize="large" />
            <span>{name}</span>
        </div>
    );
};
