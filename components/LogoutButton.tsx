import '../styles/LogoutButton.scss';

type Props = {
    onLogout: () => void;
};
export const LogoutButton = ({onLogout}:Props) => {
 return (
     <button className="logout-button" onClick={onLogout}>
         ログアウト
     </button>
 );
}
