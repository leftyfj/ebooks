はじめに

React + Supabaseで電子書籍管理アプリを開発している。

Googleアカウントでログインできるようにするため、Google Cloud ConsoleとSupabaseの設定を行った。

最初は設定箇所が多く混乱したので、自分用の備忘録としてまとめる。

開発環境
React
TypeScript
Vite
Supabase
Prisma
PostgreSQL
1. Google Cloud Consoleでプロジェクトを作成

まずGoogle Cloud Consoleへアクセスする。

新しいプロジェクトを作成する。

例

ebooks-app

プロジェクトを作成したら、そのプロジェクトを選択する。

2. OAuth同意画面を設定する

左メニューから

APIとサービス
↓
OAuth同意画面

を開く。

User Type

通常のWebアプリであれば

External

を選択する。

アプリ情報

設定する内容

アプリ名
ユーザーサポートメール
デベロッパー連絡先メール

保存して次へ進む。

3. テストユーザーを追加する

公開前はテストモードになっている。

そのため、自分のGoogleアカウントを

Test Users

へ追加する。

追加していないGoogleアカウントではログインできない。

4. OAuthクライアントIDを作成

メニュー

APIとサービス
↓
認証情報
↓
認証情報を作成
↓
OAuth クライアントID

アプリケーションの種類は

Web application

を選択する。

5. 承認済みJavaScript生成元を登録

ローカル開発なら

http://localhost:5173

を登録する。

Viteの標準ポートが5173だからである。

6. 承認済みリダイレクトURIを登録

SupabaseのAuthentication画面に表示されているURLを登録する。

例

https://xxxxxxxx.supabase.co/auth/v1/callback

このURLはSupabaseプロジェクトごとに異なる。

7. Client ID と Client Secretを取得

OAuthクライアントを作成すると

Client ID
Client Secret

が発行される。

後ほどSupabaseへ登録するので控えておく。

8. SupabaseでGoogle認証を有効化

Supabase Dashboardを開く。

Authentication
↓
Providers
↓
Google

を開く。

Google Providerを

Enable

にする。

9. Google Cloud Consoleの情報を入力

取得した

Client ID
Client Secret

を入力する。

保存する。

10. Site URLを確認する

Authentication

URL Configuration

を開く。

開発環境なら

http://localhost:5173

を設定する。

11. Redirect URLsを設定する

こちらも

http://localhost:5173

を追加する。

本番公開後は本番URLも追加する。

例

https://example.com
12. ReactからGoogleログインを呼び出す準備完了

ここまで設定すると、React側から

supabase.auth.signInWithOAuth({
  provider: "google",
});

を実行するだけでGoogleログイン画面が表示される。

実際の実装は次回の記事で紹介する予定である。

まとめ

Google認証は設定項目が多く、一見難しそうに見える。

しかし実際には

Google Cloud ConsoleでOAuthを作成
Client ID・Client Secretを取得
Supabaseへ登録

という3段階で構成されている。

設定さえ終われば、React側のコードは非常にシンプルで実装できる。

次回はReactでGoogleログインボタンを作成し、実際にログインできるようになるまでをまとめたい。

OAuthとは？

OAuth（Open Authorization）は、ユーザーのパスワードをアプリに渡すことなく、他社サービスの認証を利用するための仕組みである。

例えば「Googleでログイン」を押すと、アプリがGoogleに認証を依頼し、ユーザーはGoogleのログイン画面で認証を行う。

認証が成功すると、Googleは「このユーザーは本人である」という情報をアプリに返す。

つまり、アプリはGoogleアカウントのパスワードを一切扱わずにログイン機能を実現できる。

Googleだけでなく、GitHub、X（Twitter）、Microsoftなどのソーシャルログインも同じOAuthという仕組みを利用している。

続いて、「OAuthクライアントIDを作成」の前に次の解説を入れると理解しやすくなります。

Client ID と Client Secretとは？

Googleは「どのアプリから認証要求が来たのか」を識別するために、各アプリへ2つの情報を発行する。

Client ID

Client IDは、アプリを識別するための公開IDである。

イメージとしては、アプリの「会員番号」のようなもので、ブラウザ側で使用しても問題ない。

GoogleはこのIDを見て、

「これは○○というアプリからのログイン要求だ」

と判断する。

Client Secret

Client Secretは、アプリ専用の秘密鍵である。

こちらは外部に公開してはいけない情報であり、GoogleはClient IDとClient Secretの組み合わせによって、

「本当にこのアプリから送られてきた認証要求か」

を確認する。

Supabaseでは、このClient Secretを安全に保管し、Googleとの認証処理を代行してくれるため、React側でClient Secretを扱う必要はない。

最後に、記事の締めくくりへ次の一文を追加すると、Supabaseを利用するメリットが伝わります。

今回はGoogle Cloud ConsoleとSupabaseの設定のみを行った。一見すると設定項目は多いが、「Googleが本人確認を行い、Supabaseが認証処理を仲介する」という流れを理解すると、それぞれの設定の意味が見えてくる。React側ではわずか数行のコードでGoogleログインを実装できるため、認証処理そのものを自前で実装する必要がない点もSupabaseの大きなメリットである。
