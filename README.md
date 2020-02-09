# love-psychology-web

# Getting Started

## 環境変数の設定

- `.env` に以下の環境変数を設定します

これらの環境変数はアプリケーションから参照されます。

```.env
PUBLIC_URL=httpまたはhttpsから始まるアプリケーションのURL
```

- サーバーの環境変数に以下を設定します

これらの環境変数はアプリケーションのBuild、デプロイ時にのみ必要です。（`yarn deploy` の実行時に必要）

本アプリケーションはSPAなので、`.env` にこれらを含める事は避けて下さい。
（公開しても支障はないですが、外部に積極的に公開すべき情報ではないと思います。）

[direnv](https://github.com/direnv/direnv) の利用を推奨します。

```
export DEPLOY_STAGE=stgかprod
export AWS_PROFILE=利用しているAWSのプロファイル名
export CLOUDFRONT_DISTRIBUTION_ID=CloudfrontのDistribution ID
```

`AWS_PROFILE` に関しては `~/.aws/config` でdefaultのプロファイル名を利用している場合は不要です。

ただし基本的にはトラブルを避ける為に下記の名前付きプロファイルの利用を推奨します。

https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-configure-profiles.html
