import xml.etree.ElementTree as ET
import xmltodict

##
with open("sample.xml") as xml_file:
    data_dict = xmltodict.parse(xml_file.read())

##
mytree = ET.parse('sample.xml')
myroot = mytree.getroot()
print(myroot)
