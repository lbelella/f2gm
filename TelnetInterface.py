import telnetlib

class TelnetInterface:
    def __init__(self, host, port, user, password, callback):
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.callback = callback

    def open(self):        
        self.tn = telnetlib.Telnet(self.host, self.port)
        self.tn.read_until(b"Login:")
        self.tn.write(self.user.encode('ascii') + b"\n")
        self.tn.read_until(b"Password:")
        self.tn.write(self.password.encode('ascii') + b"\n")
        print("Connected...")

    def close(self):
        print("Closing...")
        self.send(b"quit")
        self.tn.close()

    def send(self, data):
        self.tn.write(data + b"\n")

        try:
            rx_data = self.tn.read_until(b"\n", 1)

            while(len(rx_data) > 0):
                self.callback(rx_data.decode('ascii').replace("\n", ""))                    
                rx_data = self.tn.read_until(b"\n", 1)
        except EOFError:
            pass

    def readAll(self):
        rx_data = None

        try:
            rx_data = self.tn.read_very_eager()
        except EOFError:
            pass

        return rx_data

    def sendGetLinesWithTrigger(self, data, data_trigger):
        append_data = False
        ret_data = []

        self.tn.write(data + b"\n")

        try:
            rx_data = self.tn.read_until(b"\n", 1)

            while(len(rx_data) > 0):                
                if append_data:
                    ret_data.append(rx_data.decode('ascii').replace("\n", ""))

                if data_trigger in rx_data.decode('ascii').replace("\n", ""):
                    append_data = True

                rx_data = self.tn.read_until(b"\n", 1)
                
        except EOFError:
            pass

        return ret_data

    def sendGetLines(self, data):
        ret_data = []
        self.tn.write(data + b"\n")

        try:
            rx_data = self.tn.read_until(b"\n", 1)

            while(len(rx_data) > 0):                
                ret_data.append(rx_data.decode('ascii').replace("\n", ""))
                rx_data = self.tn.read_until(b"\n", 1)
                
        except EOFError:
            pass

        return ret_data