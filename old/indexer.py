import os
import json

mypath = "./" 

my_indexes = {} 

def list_all(mypath ) :
    d = [] 
    f = []
    for (dirpath, dirnames, filenames) in os.walk(mypath):
        f.extend(filenames)
        d.extend(dirnames )
        return f, d

def get_obj(cur_path) :
    out = {} 
    files, dirs = list_all(cur_path)
    out['files'] = files
    temp = {} 
    for dir in dirs:
        temp[dir] = get_obj( os.path.join(cur_path, dir) ) 
    out['dirs'] = temp
    return out
    

my_indexes = get_obj(mypath ) 

json_data = json.dumps(my_indexes, indent=4)
print(json_data )

with open('indexes.json', 'w') as out:
    out.write( json_data )

print("""
    .
    .
    .
¡DONE!

""");