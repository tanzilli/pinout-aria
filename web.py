import tornado.ioloop
import tornado.web
import os

linux_tree_path = "../linux-3.11"

dts_path = linux_tree_path + "/arch/arm/boot/dts"
dummy_dt_filename ="dteditor"

class Compile(tornado.web.RequestHandler):
	
	def post(self):
		dts_contents = self.get_argument('dts_contents', 'No data received')
		dt_filename = self.get_argument('dt_filename', 'No data received')
		out_file = open(dts_path + "/" + dummy_dt_filename + ".dts","w")
		out_file.write(dts_contents)
		out_file.close()		
		rtc=os.system("cd " + linux_tree_path + "; make ARCH=arm CROSS_COMPILE=arm-linux-gnueabi- " + dummy_dt_filename + ".dtb")
		rtc=os.system("cp " + dts_path + "/" + dummy_dt_filename + ".dtb " + dt_filename + ".dtb")
		self.write("Ok")
		

application = tornado.web.Application([
	(r"/compile", Compile),
	(r"/(.*)", tornado.web.StaticFileHandler, {"path": ".","default_filename": "index.html"})
])

if __name__ == "__main__":
	application.listen(8080,"0.0.0.0")
	tornado.ioloop.IOLoop.instance().start()
