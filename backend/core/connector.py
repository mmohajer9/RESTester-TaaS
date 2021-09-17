from pathlib import Path
from decouple import config
import subprocess


EXECUTION_PATH = config(
    "EXECUTION_PATH", default="/home/mohammad/Desktop/RESTester/main.js"
)


class Connector:
    def __init__(self, exec_path=EXECUTION_PATH, *args, **kwargs):
        self.exec_path = exec_path

    def generate(self, use_examples=True):
        pass

    def init(self):
        command = [self.exec_path , 'init']
        subprocess.run(command)


c = Connector()

c.init()