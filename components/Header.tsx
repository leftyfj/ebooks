
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { LogoutButton } from '@/components/LogoutButton';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
import type { User } from '@supabase/supabase-js';
import '../styles/Header.scss';
type HeaderProps = {
    user:User | null;
    onLogout:()=>void;
}
export const Header = ({user, onLogout}:HeaderProps) => {
 return (
     <header className="header">
         <div className="header__logo ">
             <AutoStoriesIcon fontSize="large" />
             <span className="header__logo-main">eBooks</span>
             <span className="header__logo-sub">Library Manager</span>
         </div>
         {user ? (
             <div className="header__isLogin">
                 <p className="isLogin">
                     {user.user_metadata.name} さんログイン中
                 </p>
                 <LogoutButton onLogout={onLogout} />
             </div>
         ) : (
             <GoogleLoginButton bgcolor="transparent" />
         )}
     </header>
 );
}
