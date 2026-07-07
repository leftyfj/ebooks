
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { LogoutButton } from '@/components/LogoutButton';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
export const Header = ({props}) => {
 return (
     <header className="header">
         <div className="header__logo ">
             <AutoStoriesIcon fontSize="large" />
             <span className="header__logo-main">eBooks</span>
             <span className="header__logo-sub">Library Manager</span>
         </div>
         {props.user ? (
             <div className="header__isLogin">
                 <p className="isLogin">
                     {user.user_metadata.name} さんログイン中
                 </p>
                 <LogoutButton onLogout={handleLogout} />
             </div>
         ) : (
             <GoogleLoginButton bgcolor="transparent" />
         )}
     </header>
 );
}
