import { calculateExperience } from 'src/utils';

const years = calculateExperience(2018);

export const jp = {
	translation: {
		home: {
			title: 'カルロス・ダニエル - デベロッパー',
			whoIs: 'カルロス・ダニエルとは？',
			description:
				'カルロス・ダニエルは音楽、哲学、功夫、バランスの取れたライフスタイルに情熱を注ぐフロントエンド開発者です。',
			experience: '専門経験',
			experience1: `ウェブおよびハイブリッドアプリ開発における${years}年以上の経験。`,
			experience2: 'Azureエコシステムに関する知識。',
			experience3:
				'ReactおよびReact Nativeを使用したフロントエンド開発のエキスパート。',
			experience4: '日常的にTypeScriptを使用。',
			thanksForVisiting: '私のサイトを訪問していただきありがとうございます！',
			contact: '連絡先',
			moreInfo: '詳細情報。',
		},
		links: {
			jobTitle: 'ソフトウェア開発者',
		},
		tools: {
			title: '',
		},
		components: {
			footer: {
				infoFooter: '@carlosdaniel.devによって☕️で作成されました',
			},
			flagLabels: {
				pt: 'ポルトガル語',
				en: '英語',
				de: 'ドイツ語',
				uk: 'ウクライナ語',
				es: 'スペイン語',
				ru: 'ロシア語',
				fr: 'フランス語',
				jp: '日本語',
			},
			header: {
				home: 'ホームページ',
				links: 'リンクページ',
				tools: 'ツール',
			},
			timer: {
				message: 'まもなく...',
			},
		},
	},
};
