#!/usr/bin/python3
"""canUnlockAll function module"""


def canUnlockAll(boxes):
    """
    a function that determines if all the boxes can be opened.
    """
    if boxes is None or len(boxes) == 0:
        return False
    allKeys = [0]
    for key in allKeys:
        for new_key in boxes[key]:
            if new_key not in allKeys and new_key < len(boxes):
                allKeys.append(new_key)
    return len(allKeys) == len(boxes)
