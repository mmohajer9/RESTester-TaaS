from pathlib import Path
from decouple import config
import subprocess


EXECUTION_PATH = config(
    "EXECUTION_PATH", default="/home/mohammad/Desktop/RESTester/main.js"
)


class RESTesterConnector:
    def __init__(self, exec_path=EXECUTION_PATH, *args, **kwargs):
        self.exec_path = exec_path
        self.generated_test_cases_path = None
        self.odg_path = None

    def generate(self, number, oas, graph, target_dir, use_example=True):
        command = [
            self.exec_path,
            "generate",
            str(number),
            "-s",
            oas,
            "-g",
            graph,
            "-o",
            target_dir,
        ]
        command.append("-u") if use_example else None
        subprocess.run(command)

    def init(self, oas, target_dir):
        command = [self.exec_path, "init", "-s", oas, "-o", target_dir]
        subprocess.run(command)
