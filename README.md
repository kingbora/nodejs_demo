����ExpressӦ��
1��ȫ�ְ�װnodejs
$ npm install nodejs -g
2��ȫ�ְ�װexpress-generator��ʼ����Ŀ
$ npm install express-generator -g
3��ʹ��ejsģ�������Ϊmyapp��webӦ��
$ express --ejs myapp
4�������������
$ npm install
5������ExpressӦ��
$ node bin/www
�������������http://localhost:3000���ɿ������н��

ʹ��bower��ʼ��ǰ����ĿĿ¼
1��ȫ�ְ�װbower
$ npm install bower -g
2����ʼ��bower�����ļ�
$ bower init
��ʾ��Ĭ�ϵ������Ƿ�����bower_componentsĿ¼�£�
�Ⲣ����������Ҫ�ģ���Ϊ�� Express��Ŀ��Ĭ�ϵľ�̬�ļ�������publicĿ¼�£�
������Ҫ���÷���Ŀ¼ΪpublicĿ¼
3���ڹ���Ŀ¼�´��������ļ�.bowerrc(���̶ֹ�)��������Ϣ���£�
{
	"directory":"public/lib"
}
4����װǰ�˿��ļ�
$ bower install bootstrap --save