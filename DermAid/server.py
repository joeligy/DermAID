from flask import Flask, request, jsonify
import base64
# from PIL import Image
# import caffe
# import numpy as np
# import json


app = Flask(__name__)

@app.route("/", methods=['POST'])
def hello():
  print 'Received'
  request_json = request.json
  print request_json
  return request_json['image']['file_data']
  filename = request_json['image']['filename'] # A field from the Android device                                                  
  # image_data = base64.b64decode(request_json['image']['file_data']) # The data image                                                  
  # with open(filename, 'wb') as f:
  #   f.write(image_data)
  # img = Image.open(filename)
  # img = img.resize((256, 256), Image.ANTIALIAS)
  # img.save(filename)

  # caffe.set_mode_gpu()
  # net = caffe.Classifier("/home/ubuntu/caffe/models/finetune_dermquest_top7/deploy.prototxt", \
  #       "/home/ubuntu/caffe/models/finetune_dermquest_top7/finetune_dermquest_top7_iter_30000.caffemodel", \
  # channel_swap = (2,1,0),raw_scale=255, image_dims=(256,256))
  # image = caffe.io.load_image(filename)
  # prediction = net.predict([image])
  # cls = np.argmax(prediction[0]) + 1 # one indexed                                                                                    
  # print cls
  # return jsonify(status = cls)


if __name__ == "__main__":
    app.run(host='0.0.0.0')